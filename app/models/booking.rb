class Booking < ApplicationRecord
  belongs_to :slot
  belongs_to :user

  scope :ordered, -> { order(booking: :asc) }
end
