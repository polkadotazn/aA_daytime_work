def calculate_tax(tax_str)
  income = parse_numbers(tax_str).to_f
  tax = 0
  if income - 45916 > 0
    tax += 0.15 * 45916
    income = income - 45916
    if income - 45915 > 0
      tax += 0.205 * 45915
      income = income - 45915
      if income - 50522 > 0
        tax += 0.26 * 50522
        income = income - 50522
        if income - 60447 > 0
          tax += 0.29 * 60557
          income = income - 60447
          if income > 0
            tax += 0.33 * income
          end
        else
          tax += 0.29 * income
        end
      else
        tax += 0.26 * income
      end
    else
      income += 0.205 * income
    end
  else
    tax += income * 0.15
  end

  prettify(tax)
end


def parse_numbers(str)
  nums = ("0".."9").to_a
  str_num = ""
  str.chars.each do |ch|
    if nums.include?(ch) || ch == "."
      str_num += ch
    end
  end
  str_num
end

def prettify(num)
  str = num.round(2).to_s
  str = "$" + str

end

p calculate_tax("1,000,000")
