def my_uniq(arr)
  uniq = []
  arr.each do |num|
    uniq << num unless uniq.include?(num)
  end

  uniq
end

def two_sum(arr)
  hash = {}
  results = []
  arr.each_with_index do |num, idx|
    if hash[-num]
      results << [hash[-num],idx]
    else
      hash[num] = idx
    end
  end
  results
end
