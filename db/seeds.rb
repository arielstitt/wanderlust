# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
City.destroy_all

atlanta = City.create!(name: 'Atlanta', image: 'https://images.unsplash.com/photo-1444852538915-ac95232916dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7877341960206009a8cff4ff9ee50f2&auto=format&fit=crop&w=1500&q=80')

london = City.create!(name: 'london', image: 'https://images.unsplash.com/photo-1483972117325-ce4920ff780b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5830a78b35e9940bcec0a989f405aea7&auto=format&fit=crop&w=1050&q=80')

sanFransisco = City.create!(name: 'San Fransisco', image: 'https://images.unsplash.com/photo-1467086674598-290e1df3352f?ixlib=rb-0.3.5&s=a783b16e42afd5528cb504c437caf120&auto=format&fit=crop&w=1502&q=80')

newYork = City.create!(name: 'New York', image: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=066279b4eeec767c30adfbccf0fadfdc&auto=format&fit=crop&w=1050&q=80')


# ATLANTA
Post.create!(title: 'Hot Lanta!', content: 'There is something to do every night of the week, and the people are actually quite friendly, which I was surprised and happy to find. Horrile Traffic!', city_id: atlanta.id)

Post.create!(title: 'The City Too Busy To Hate', content: ' I love that no matter how long I live in Atlanta, I find something new to discover each and every weekend. A lot of the downtown Atlanta attractions are easily accessible from MARTA stations, which provide both bus and rail services to major points in the city.', city_id: atlanta.id)

#LONDON

Post.create!(title: 'Londonium', content: 'heart of the action and near the city’s main theatres, exclusive boutiques, fashionable hot spots and trendy night clubs.', city_id: london.id)

Post.create!(title: 'Big Ben', content: ' I love that no matter how long I live in Atlanta, I find something new to discover each and every weekend. A lot of the downtown Atlanta attractions are easily accessible from MARTA stations, which provide both bus and rail services to major points in the city.', city_id: london.id)

# SAN FRANSISICO

Post.create!(title: 'Pier 39', content: ' The amazing place always crowded but buzzing plenty to do and see a great variety of things to do and see great fresh fruit stall with huge range of fruits', city_id: sanFransisco.id)

Post.create!(title: 'The Bay', content: 'First time in San Francisco and we had a blast. So much to see and so. The charter tours were great and help you to see more and enjoy more.', city_id: sanFransisco.id)

# NYC

Post.create!(title: 'The Big Apple', content: 'Lets be completely honest people, theres no other city in the States like the Big Apple', city_id: newYork.id)

Post.create!(title: 'I love this city', content: 'I love taking Staten Island Ferry in odd hours of the morning before city wakes up and walk across Brooklyn Bridge to see sunrise.', city_id: newYork.id)
