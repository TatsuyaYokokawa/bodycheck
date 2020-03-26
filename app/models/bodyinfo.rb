class Bodyinfo < ApplicationRecord
  belongs_to :user, optional: true
end
