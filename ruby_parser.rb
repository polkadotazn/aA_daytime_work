require 'JSON'

# Returns entire JSON file in a hash
def return_data_hash
  file = File.open('data.json').read
  data_hash = {}

  file.each_line do |line|
    parsed_line = JSON.parse(line)
    data_hash[parsed_line["uuid"]] = parsed_line["payload"]
  end

  data_hash
end

# Returns just the values array, without the UUID
def return_payload
  data_hash = return_data_hash
  payload = data_hash.values
end

# 1. Return every unique locality (cf. city) along with how often it occurs
def city_frequency
  payload = return_payload
  city_hash = Hash.new(0)
  count = 0

  payload.each do |location|
    locality = location["post_town"]
    if locality
      locality = locality.strip
      # normalizes each name
      if locality.match(/-/)
        locality = locality.split('-').map(&:capitalize).join('-')
      else
        locality = locality.split.map(&:capitalize).join(' ')
      end
      city_hash[locality] += 1
    end
  end

  puts city_hash
end



# 2. Return all addresses that start with a number (return just the address)
def addr_start_with_num
  payload = return_payload
  addresses = []

  payload.each do |location|
    address = location["address"]
    address = address.strip if address
    if address && address.match(/^\d/)
      addresses << address
    end
  end

  puts addresses
end


# 3. Return all rows with addresses that don't contain a number (return the entire row)
def no_num_address
  data_hash = return_data_hash
  addr_without_number = []

  data_hash.each do |uuid, location|
    loc = {uuid => location}
    address = location["address"]
    address = address.strip if address
    # filter out addresses that include a numeral
    if address && address != "" && !address.match(/\d/)
      addr_without_number << loc
    end
  end

  puts addr_without_number
end

# 4. Return the number of records that are museums
def count_museums
  payload = return_payload
  museum_count = 0

  payload.each do |location|
    categories = location["category_labels"]
    if categories

      categories.each do |cat|
        if cat.include?("Museums")
          museum_count += 1
          break
        end
      end

    end
  end

  puts museum_count
end


# 5. Return a new object containing uuid, name, website, and email address for all rows that have values for all four of these attributes; exclude any rows that don’t have all four
def complete_objects
  data_hash = return_data_hash
  valid_data_hash = {}

  data_hash.each do |k, v|
    if k && v["name"] && v["website"] && v["email"]
      valid_data_hash[k] = {"name" => v["name"], "website" => v["website"], "email" => v["email"]}
    end
  end

  puts valid_data_hash
end



# 6. Return all rows, but transform the names to all lower case while changing nothing else
def lowercase_names
  data_hash = return_data_hash

  data_hash.map do |uuid, location|
    if location["name"]
      location["name"] = location["name"].downcase
    end
  end

  puts data_hash
end


# 7. Return all rows for businesses that open before 10:00 a.m. on Sundays
def early_openers
  data_hash = return_data_hash
  early_open = []

  data_hash.each do |uuid, location|
    if location["hours"]
      hours = JSON.parse(location["hours"])
      # checks that Sunday hours exist
      if hours["sunday"] && hours["sunday"][0][0]
        # deletes the "Saturday night spillover" hours
        hours["sunday"].delete_at(0) if hours["sunday"].length > 1
        # checks if business is open before 10, or the entire 24 hrs
        if hours["sunday"][0][0].length < 5 || hours["sunday"][0][0] == "00:00"
          early_open << {uuid => location}
        end
      end
    end
  end

  puts early_open
end















#
