require 'nokogiri'
require 'httparty'
require 'byebug'

def scraper

  url_init = "https://www.indeed.com/jobs?q=software+engineer+javascript&l=San+Francisco,+CA&explvl=entry_level&start=10"
  unparsed_page_init = HTTParty.get(url_init)
  parsed_page_init = Nokogiri::HTML(unparsed_page_init)
  job_listings_init = parsed_page_init.css('div.row.result')

  jobs = []
  page = 10
  per_page = job_listings_init.count
  total_text = parsed_page_init.css('div#searchCount')[0].children.text.chomp.strip
  total = /(\d+).(\d+)/.match(total_text)[0].to_i

  while page < total + 10
    page_url = "https://www.indeed.com/jobs?q=software+engineer+javascript&l=San+Francisco,+CA&explvl=entry_level&start=#{page}"
    puts "URL: #{page_url}"
    unparsed_page = HTTParty.get(page_url)
    parsed_page = Nokogiri::HTML(unparsed_page)
    job_listings = parsed_page.css('div.row.result') #16 jobs

    job_listings.each do |job_listing|
      url = ""
      if job_listing.css('a.jobtitle').text.chomp.strip != ""
        url = job_listing.css('a.jobtitle')[0].attributes["href"].value
      end

      if url != ""
        job = {
          title: job_listing.css('a.jobtitle').text,
          company: job_listing.css('span.company').text.chomp.strip,
          location: job_listing.css('span.location').text,
          url: "https://www.indeed.com" + url,
          summary: job_listing.css('span.summary'),
          reqs: job_listing.css('span.experienceList'),
        }
        jobs << job
        puts "Added #{job[:title]}"

      end
    end
    page += 10
  end
  byebug
end

scraper
