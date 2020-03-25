class CreateBodyinfos < ActiveRecord::Migration[5.2]
  def change
    create_table :bodyinfos do |t|

      t.date       :date
      t.integer    :sex
      t.integer    :age
      t.integer    :height
      t.integer    :weight
      # t.references :user, foreign_key: true
      
      t.timestamps
    end
  end
end
