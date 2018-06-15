require 'rspec'
require 'problems'

describe "#my_uniq" do
  let(:array) { [1, 2, 5, 5, 5, 6, 2, 2, 5, 1] }
  it "removes duplicates" do
    uniq = my_uniq(array)
    expect(uniq).to eq([1, 2, 5, 6])
  end

end

describe "#two_sum" do
  let(:array) { [-3, 1, 2, 3, 0, -1, 5, 6] }

  it "lists indices of numbers that sum to 0" do
    two_sum_arr = two_sum(array)
    expect(two_sum_arr).to eq([[0, 3],[1, 5]])
  end
end
