class CreateBodyinfos < ActiveRecord::Migration[5.2]
  def change
    create_table :bodyinfos do |t|

      t.integer    :sex
      t.integer    :age
      t.integer    :height
      t.integer    :weight
      # t.references :users, foreign_key: true
      
      t.timestamps
    end
  end
end
