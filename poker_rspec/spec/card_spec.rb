require 'rspec'
require 'card'

describe Card do
  subject { Card.new("spades", 8) }

  describe "#initialize" do
    it "sets a suit" do
      expect(subject.suit).to eq("spades")
    end

    it "sets a value" do
      expect(subject.value).to eq(8)
    end

    it "doesn't accept invalid values or suits" do
      expect{ Card.new("ladybug", 16)}
    end
  end


end
