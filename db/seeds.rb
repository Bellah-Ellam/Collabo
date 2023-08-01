puts "Seeding..."

# Create admin user
User.create!(
  name: "Admin",
  email: "admin@mail.com",
  password: "password",
   admin: true,
  date_of_birth: "2000-10-11"
)

# Create users
9.times do |i|
  User.create!(
    name: Faker::Name.unique.name,
    email: Faker::Internet.unique.email,
    password: "password",
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2002-12-31')
  )
end

# Create some contents
users = User.all
9.times do |i|
  content = users.sample.contents.create!(
    title: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraph,
    content_type: "article",
    status: "published"
  )
end

# Create some categories
9.times do |i|
  Category.create!(
    category_name: Faker::Lorem.word,
    content_id: Content.all.sample.id
  )
end

# Create some tags
9.times do |i|
  Tag.create!(
    name: Faker::Lorem.word
  )
end

# Create content categories and tags
contents = Content.all
categories = Category.all
tags = Tag.all

contents.each do |content|
  content_categories = categories.sample(rand(1..3))
  content_tags = tags.sample(rand(1..3))

  content_categories.each do |category|
    ContentCategory.create!(content_id: content.id, category_id: category.id)
  end

 
end
#comment
contents = Content.all
users = User.all

10.times do
  content = contents.sample
  user = users.sample

  comment = content.comments.build(
    body: Faker::Lorem.paragraph,
    user: user
  )

  comment.save!
end



# Create some notifications
users.each do |user|
  5.times do |i|
    Notification.create!(
      message: Faker::Lorem.sentence,
      user_id: user.id
    )
  end
end
# Create likes and views for each content
contents = Content.all
users = User.all

contents.each do |content|
  # Create likes
  5.times do
    user = users.sample
    content_like = content.content_likes.build(user: user)
    content_like.save!
  end

  # Create views
  3.times do
    user = users.sample
    content_view = content.content_views.build(user: user)
    content_view.save!
  end
end


puts "Seeding completed!"
