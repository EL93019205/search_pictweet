class AddIndexToTweets < ActiveRecord::Migration[5.2]
  def change
    add_index :tweets, :text, length: 32
  end
end
