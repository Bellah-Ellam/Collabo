# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding"
User.create!(name: "Admin", email: "admin@mail.com", password: "password", password_confirmation: "password", role: 'admin', photo: "https://avatars.githubusercontent.com/u/76783698?v=4", date_of_birth: "2000-10-11")
User.create(name: '0maddox', email: 'nickkiim7@gmail.com', password: '123456', password_confirmation: '123456', photo: 'url_david',
            date_of_birth: '1991-04-03')

 puts"done seeding"