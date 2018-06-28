require 'JSON'

file = File.open('data.json').read
data_hash = {}

file.each_line do |line|
  parsed_line = JSON.parse(line)
  data_hash[parsed_line["uuid"]] = parsed_line["payload"]
end

payload = data_hash.values

# p data_hash["8278ab80-2cd1-4dbd-9685-0d0036b681eb"]

# find frequency of each city
def city_frequency
  city_hash = Hash.new(0)
  count = 0
  payload.each do |location|
    locality = location["post_town"]
    if locality
      if locality.match(/-/)
        locality = locality.split('-').map(&:capitalize).join('-')
      else
        locality = locality.split.map(&:capitalize).join(' ')
      end
      city_hash[locality] += 1
    end
  end
  p city_hash
end



# find addresses that begin with a number - return just the address
def addr_start_with_num
  addresses = []
  payload.each do |location|
    address = location["address"]
    if address && address.match(/^\d/)
      addresses << address
    end
  end
  p addresses
end


# Return all rows with addresses that don't contain a number (return the entire row)
def no_num_address
  locations = []
  payload.each do |location|
    address = location["address"]
    # p location if !address
    if address && address.match(/\d/)
    else
      locations << location
    end
  end
  p locations
end

# Return the number of records that are museums
def count_museums
  museum_count = 0
  payload.each do |location|
    categories = location["category_labels"]

    if categories
      categories.each do |cat|
        if cat.include?("Museums")
          museum_count += 1
          break
        else
          location["search_tags"]
        end
      end
    end
  end
  p museum_count
end


# Return a new object containing uuid, name, website, and email address for all rows that have values for all four of these attributes; exclude any rows that don’t have all four
def complete_objects
  valid_data_hash = {}
  data_hash.each do |k, v|
    if k && v["name"] && v["website"] && v["email"]
      valid_data_hash[k] = {"name" => v["name"], "website" => v["website"], "email" => v["email"]}
    end
  end
  p valid_data_hash
end



# Return all rows, but transform the names to all lower case while changing nothing else
def lowercase_names
  lowercase_name = {}
  data_hash.each do |k, v|
    lowercase_name[k] = v
  end
  lowercase_name.map do |k, v|
    if v["name"]
      v["name"] = v["name"].downcase
    end
  end
  p lowercase_name
end


# Return all rows for businesses that open before 10:00 a.m. on Sundays
def early_openers
  early_open = []
  payload.each do |location|
    if location["hours"]
      hours = JSON.parse(location["hours"])
      if hours["saturday"] && hours["saturday"][0][0].length < 5
        hours["saturday"][0][0]
        early_open << location
      end
    end
  end
  p early_open
end















#
