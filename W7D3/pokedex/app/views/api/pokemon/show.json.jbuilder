json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids
end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.id item.id
      json.name item.name
      json.pokemon_id @poke.id
      json.price item.price
      json.happiness item.happiness
      json.image_url item.image_url
    end
  end
end
