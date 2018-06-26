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

# p city_hash


# find addresses that begin with a number - return just the address
addresses = []
payload.each do |location|
  address = location["address"]
  if address && address.match(/^\d/)
    addresses << address
  end
end

p addresses

# Return all rows with addresses that don't contain a number (return the entire row)
# Return the number of records that are museums
# Return a new object containing uuid, name, website, and email address for all rows that have values for all four of these attributes; exclude any rows that don’t have all four
# Return all rows, but transform the names to all lower case while changing nothing else
# Return all rows for businesses that open before 10:00 a.m. on Sundays
