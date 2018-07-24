require 'nokogiri'
require 'httparty'
require 'byebug'

def scraper
  url = "https://www.indeed.com/jobs?q=software%20engineer%20javascript&l=San%20Francisco%2C%20CA&explvl=entry_level&vjk=86d6c04a44c665d4"
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri::HTML(unparsed_page)
  job_listings = parsed_page.css('div.row.result') #16 jobs
  jobs = []
  per_page = job_listings.count
  total_text = parsed_page.css('div#searchCount')[0].children.text.chomp.strip
  total = /(\d+).(\d+)/.match(total_text)[0].to_i
  job_listings.each do |job_listing|
    url = ""
    if !job_listing.css('a.jobtitle').empty?
      url = job_listing.css('a.jobtitle')[0].attributes["href"].value
    end

    job = {
      title: job_listing.css('a.jobtitle').text,
      company: job_listing.css('span.company').text.chomp.strip,
      location: job_listing.css('span.location').text,
      url: "https://www.indeed.com" + url,
      summary: job_listing.css('span.summary'),
      reqs: job_listing.css('span.experienceList'),
    }
    jobs << job
  end
  byebug
end

scraper
