require 'byebug'

def range(num1, num2)
  arr = []
  return [] if num2 < num1
  return arr if num1 == num2
  arr = range(num1, num2 - 1) + [num2 - 1]
  # (num1...num2).to_a.each { |num| num }
end

def sum_array(array)
  return nil if array.empty?
  return array.first if array.length == 1
  array[0] + sum_array(array[1..-1])
end

def sum_array_iterative(array)
  return nil if array.empty?
  sum = 0
  array.each { |num| sum += num }
  sum
end

def recursive_exp_1(base, power)
  return 1 if power == 0
  base * recursive_exp_1(base, power - 1)
end

def recursive_exp_2(base, power)
  return 1 if power == 0
  return base if power == 1
  if power.even?
    x = recursive_exp_2(base, power/2)
    x * x
  else
    x = recursive_exp_2(base, (power - 1) / 2)
    base * x * x
  end
end

class Array
  def deep_dup
    duped_arr = []
    self.each do |el|
      if el.is_a?(Array)
        duped_arr << el.deep_dup
      else
        duped_arr << el
      end
    end
    duped_arr
  end

  def subsets2
    return [[]] if empty?
    subs = take(count - 1).subsets2
    subs.concat(subs.map { |sub| sub + [last] })
  end

  def merge_sort
    return self if count < 2
    middle = length/2
    left = take(middle).merge_sort
    right = self[middle..-1].merge_sort
    merge(left, right)
  end

  def merge(left, right)
    arr = []
    until left.empty? || right.empty?
      if right[0] > left[0]
        arr << left.shift
      else
        arr << right.shift
      end
    end
    arr + left + right
  end

  def permutations
    return [] if empty?
    permutation_arr = []
    self.permutations << self.pop
  end

end

def fibonacci(n)
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2
  old_sequence = fibonacci(n - 1)
  old_sequence + [old_sequence[-1] + old_sequence[-2]]
end

def subsets(array)
  return [[]] if array.empty?
  last_el = array.pop
  subset_array = subsets(array)
  duped_array = subset_array.deep_dup
  duped_array.each do |el|
    subset_array << (el + [last_el])
  end
  subset_array
end

def bsearch(arr, target)
  return nil if arr.empty?
  # debugger
  index = arr.length / 2
  case target <=> arr[index]
  when -1
    bsearch(arr.take(index), target)
  when 0
    index
  when 1
    sub_answer = bsearch(arr.drop(index + 1), target)
    sub_answer.nil? ? nil : (index + 1) + sub_answer
  end

end
