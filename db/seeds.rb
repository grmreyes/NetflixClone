# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies= Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#clear tables

require 'open-uri'

User.delete_all
Movie.delete_all
Genre.delete_all
Label.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('movies')
ActiveRecord::Base.connection.reset_pk_sequence!('genres')
ActiveRecord::Base.connection.reset_pk_sequence!('labels')

# user
u1=User.new
u1.username='ncage'
u1.password='123456'
u1.save

# movies
m1=Movie.new
m1.title='Spider-Man: Into the Spider-Verse'
m1.description='After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.'
m1.runtime='1h 56m'
m1.rating='PG-13'
m1.year=2018

m2=Movie.new
m2.title='Face/Off'
m2.description='Sean Archer, an FBI Agent, undergoes plastic surgery in order to impersonate and get hold of his son\'s killer and his arch-enemy, Castor Troy. Trouble brews when Castor begins impersonating Sean.'
m2.runtime='2h 20m'
m2.rating='R'
m2.year=1997

m3=Movie.new
m3.title='Kick-Ass'
m3.description='Comic book geek Dave sets out to become Kick-Ass, a real-life superhero. Big Daddy and Hit-Girl attempt to dismantle the underworld empire of mob boss Frank D\'Amico, when Kick-Ass gets involved.'
m3.runtime='1h 57m'
m3.rating='R'
m3.year=2010

m4=Movie.new
m4.title='The Rock'
m4.description='A dishonest Brigadier General Frank Hummel threatens the government to launch rockets on the city of San Francisco. However, a mild-mannered chemist and an ex-convict team up to stop the general.'
m4.runtime='2h 16m'
m4.rating='R'
m4.year=1996

m5=Movie.new
m5.title='Con Air'
m5.description='Cameron is a wrongly convicted prisoner who is going to be released when his plane is hijacked by other criminals. While they seize control of the plane, he attempts to wrest control and return home.'
m5.runtime='2h 3m'
m5.rating='R'
m5.year=1997

m6=Movie.new
m6.title='City of Angels'
m6.description='Seth is an angel who guides humans to the next life. When he sees Maggie, a heart surgeon trying to save a patient, he falls in love with her. Seth makes a choice which changes everything.'
m6.runtime='1h 54m'
m6.rating='PG-13'
m6.year=1998

m7=Movie.new
m7.title='National Treasure'
m7.description='Benjamin Franklin Gates seeks a war chest hidden by the Founding Fathers during the Revolutionary War. He must find it before his competitor does and also avoid getting arrested by the FBI.'
m7.runtime='2h 11m'
m7.rating='PG'
m7.year=2004

m8=Movie.new
m8.title='The Sorcerer\'s Apprentice'
m8.description='Master sorcerer Balthazar hires Dave, a student, as an apprentice to aid him in saving the city from his arch-enemy, Maxim Horvath. Thus, Dave gets a crash course in the art and science of magic.'
m8.runtime='1h 51m'
m8.rating='PG'
m8.year=2010

m9=Movie.new
m9.title='Trespass'
m9.description='A married couple gets taken hostage by extortionists.'
m9.runtime='1h 44m'
m9.rating='R'
m9.year=2011

m10=Movie.new
m10.title='Leaving Las Vegas'
m10.description='Ben Sanderson, a screenwriter who lost everything because of alcoholism, moves to Las Vegas to drink himself to death. There, he meets Sera, a prostitute, and moves in with her.'
m10.runtime='1h 52m'
m10.rating='R'
m10.year=1996

m11=Movie.new
m11.title='Mandy'
m11.description='Red Miller sets out to settle scores with a deranged hippie cult when they disrupt his peaceful life, wreaking havoc in his haven and kidnapping his wife, Mandy Bloom.'
m11.runtime='2h 1m'
m11.rating='R'
m11.year=2018

m12=Movie.new
m12.title='Adaptation'
m12.description='Kaufman, a screen writer, struggles to adapt Orlean\'s book about Laroche, who clones rare orchids and sells them to collectors. Their lives get intertwined with unpredictable results.'
m12.runtime='1h 55m'
m12.rating='R'
m12.year=2003

m13=Movie.new
m13.title='Mom and Dad'
m13.description='Carly and her brother, Josh, are forced to protect themselves from harm when an unknown phenomenon causes all parents to violently attack their children.'
m13.runtime='2h 3m'
m13.rating='R'
m13.year=2018

m14=Movie.new
m14.title='The Croods'
m14.description='Grug and his family embark on a journey to search for a new place to live after their cave is destroyed. A young boy helps them trek through unknown places to find new shelter.'
m14.runtime='1h 39m'
m14.rating='PG'
m14.year=2013

m15=Movie.new
m15.title='The Ant Bully'
m15.description='After being bullied by a boy bigger than him, Lucas takes his frustrations out on an innocent colony of ants. However, his worst fears come alive when a curse shrinks him down to their size.'
m15.runtime='1h 30m'
m15.rating='PG'
m15.year=2006

m16=Movie.new
m16.title='Bangkok Dangerous'
m16.description='Joe, a hit man, arrives in Bangkok, hires Kong as his errand boy and begins work. He soon realises that he has begun to break his four rules of being a hit man, without which he is bound to fall prey.'
m16.runtime='1h 45m'
m16.rating='R'
m16.year=2008

m17=Movie.new
m17.title='Army of One'
m17.description='Gary Faulkner, an ex-con, unemployed handyman, and modern day Don Quixote receives a vision from God telling him to capture Osama bin Laden.'
m17.runtime='1h 33m'
m17.rating='R'
m17.year=2016

m18=Movie.new
m18.title='G-Force'
m18.description='A squad of specially trained guinea pigs goes on their latest mission and aims to sabotage the plans of a diabolical billionaire who dreams of taking over the world via household appliances.'
m18.runtime='1h 40m'
m18.rating='PG'
m18.year=2009




m1.save
m2.save
m3.save
m4.save
m5.save
m6.save
m7.save
m8.save
m9.save
m10.save
m11.save
m12.save
m13.save
m14.save
m15.save
m16.save
m17.save
m18.save


# movies poster AWS

file1 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/1.png')
file2 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/2.png')
file3 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/3.png')
file4 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/4.png')
file5 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/5.png')
file6 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/6.png')
file7 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/7.png')
file8 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/8.png')
file9 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/9.png')
file10 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/10.png')
file11 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/11.png')
file12 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/12.png')
file13 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/13.png')
file14 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/14.png')
file15 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/15.png')
file16 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/16.png')
file17 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/17.png')
file18 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/posters/18.png')

m1.photo.attach(io: file1, filename: '1.png')
m2.photo.attach(io: file2, filename: '2.png')
m3.photo.attach(io: file3, filename: '3.png')
m4.photo.attach(io: file4, filename: '4.png')
m5.photo.attach(io: file5, filename: '5.png')
m6.photo.attach(io: file6, filename: '6.png')
m7.photo.attach(io: file7, filename: '7.png')
m8.photo.attach(io: file8, filename: '8.png')
m9.photo.attach(io: file9, filename: '9.png')
m10.photo.attach(io: file10, filename: '10.png')
m11.photo.attach(io: file11, filename: '11.png')
m12.photo.attach(io: file12, filename: '12.png')
m13.photo.attach(io: file13, filename: '13.png')
m14.photo.attach(io: file14, filename: '14.png')
m15.photo.attach(io: file15, filename: '15.png')
m16.photo.attach(io: file16, filename: '16.png')
m17.photo.attach(io: file17, filename: '17.png')
m18.photo.attach(io: file18, filename: '18.png')

# m1.photo.attach(io: File.open("../pics/1.png"), filename: "1.png")
# m2.photo.attach(io: File.open("../pics/2.png"), filename: "2.png")
# m3.photo.attach(io: File.open("../pics/3.png"), filename: "3.png")
# m4.photo.attach(io: File.open("../pics/4.png"), filename: "4.png")
# m5.photo.attach(io: File.open("../pics/5.png"), filename: "5.png")
# m6.photo.attach(io: File.open("../pics/6.png"), filename: "6.png")
# m7.photo.attach(io: File.open("../pics/7.png"), filename: "7.png")
# m8.photo.attach(io: File.open("../pics/8.png"), filename: "8.png")
# m9.photo.attach(io: File.open("../pics/9.png"), filename: "9.png")
# m10.photo.attach(io: File.open("../pics/10.png"), filename: "10.png")
# m11.photo.attach(io: File.open("../pics/11.png"), filename: "11.png")
# m12.photo.attach(io: File.open("../pics/12.png"), filename: "12.png")
# m13.photo.attach(io: File.open("../pics/13.png"), filename: "13.png")
# m14.photo.attach(io: File.open("../pics/14.png"), filename: "14.png")
# m15.photo.attach(io: File.open("../pics/15.png"), filename: "15.png")
# m16.photo.attach(io: File.open("../pics/16.png"), filename: "16.png")
# m17.photo.attach(io: File.open("../pics/17.png"), filename: "17.png")
# m18.photo.attach(io: File.open("../pics/18.png"), filename: "18.png")

# movies videos AWS



file1 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/1.mp4')
file2 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/2.mp4')
file3 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/3.mp4')
file4 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/4.mp4')
file5 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/5.mp4')
file6 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/6.mp4')
file7 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/7.mp4')
file8 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/8.mp4')
file9 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/9.mp4')
file10 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/10.mp4')
file11 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/11.mp4')
file12 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/12.mp4')
file13 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/13.mp4')
file14 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/14.mp4')
file15 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/15.mp4')
file16 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/16.mp4')
file17 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/17.mp4')
file18 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/bigvids/18.mp4')


m1.video.attach(io: file1, filename: '1.mp4')
m2.video.attach(io: file2, filename: '2.mp4')
m3.video.attach(io: file3, filename: '3.mp4')
m4.video.attach(io: file4, filename: '4.mp4')
m5.video.attach(io: file5, filename: '5.mp4')
m6.video.attach(io: file6, filename: '6.mp4')
m7.video.attach(io: file7, filename: '7.mp4')
m8.video.attach(io: file8, filename: '8.mp4')
m9.video.attach(io: file9, filename: '9.mp4')
m10.video.attach(io: file10, filename: '10.mp4')
m11.video.attach(io: file11, filename: '11.mp4')
m12.video.attach(io: file12, filename: '12.mp4')
m13.video.attach(io: file13, filename: '13.mp4')
m14.video.attach(io: file14, filename: '14.mp4')
m15.video.attach(io: file15, filename: '15.mp4')
m16.video.attach(io: file16, filename: '16.mp4')
m17.video.attach(io: file17, filename: '17.mp4')
m18.video.attach(io: file18, filename: '18.mp4')

# m1.video.attach(io: File.open("../vids/1.mp4"), filename: "1.mp4")
# m2.video.attach(io: File.open("../vids/2.mp4"), filename: "2.mp4")
# m3.video.attach(io: File.open("../vids/3.mp4"), filename: "3.mp4")
# m4.video.attach(io: File.open("../vids/4.mp4"), filename: "4.mp4")
# m5.video.attach(io: File.open("../vids/5.mp4"), filename: "5.mp4")
# m6.video.attach(io: File.open("../vids/6.mp4"), filename: "6.mp4")
# m7.video.attach(io: File.open("../vids/7.mp4"), filename: "7.mp4")
# m8.video.attach(io: File.open("../vids/8.mp4"), filename: "8.mp4")
# m9.video.attach(io: File.open("../vids/9.mp4"), filename: "9.mp4")
# m10.video.attach(io: File.open("../vids/10.mp4"), filename: "10.mp4")
# m11.video.attach(io: File.open("../vids/11.mp4"), filename: "11.mp4")
# m12.video.attach(io: File.open("../vids/12.mp4"), filename: "12.mp4")
# m13.video.attach(io: File.open("../vids/13.mp4"), filename: "13.mp4")
# m14.video.attach(io: File.open("../vids/14.mp4"), filename: "14.mp4")
# m15.video.attach(io: File.open("../vids/15.mp4"), filename: "15.mp4")
# m16.video.attach(io: File.open("../vids/16.mp4"), filename: "16.mp4")
# m17.video.attach(io: File.open("../vids/17.mp4"), filename: "17.mp4")
# m18.video.attach(io: File.open("../vids/18.mp4"), filename: "18.mp4")

# movies videos-small AWS

file1 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/1.mp4')
file2 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/2.mp4')
file3 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/3.mp4')
file4 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/4.mp4')
file5 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/5.mp4')
file6 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/6.mp4')
file7 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/7.mp4')
file8 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/8.mp4')
file9 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/9.mp4')
file10 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/10.mp4')
file11 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/11.mp4')
file12 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/12.mp4')
file13 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/13.mp4')
file14 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/14.mp4')
file15 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/15.mp4')
file16 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/16.mp4')
file17 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/17.mp4')
file18 = open('https://nicflix-dev.s3-us-west-1.amazonaws.com/videos/18.mp4')

m1.video_small.attach(io: file1, filename: '1.mp4')
m2.video_small.attach(io: file2, filename: '2.mp4')
m3.video_small.attach(io: file3, filename: '3.mp4')
m4.video_small.attach(io: file4, filename: '4.mp4')
m5.video_small.attach(io: file5, filename: '5.mp4')
m6.video_small.attach(io: file6, filename: '6.mp4')
m7.video_small.attach(io: file7, filename: '7.mp4')
m8.video_small.attach(io: file8, filename: '8.mp4')
m9.video_small.attach(io: file9, filename: '9.mp4')
m10.video_small.attach(io: file10, filename: '10.mp4')
m11.video_small.attach(io: file11, filename: '11.mp4')
m12.video_small.attach(io: file12, filename: '12.mp4')
m13.video_small.attach(io: file13, filename: '13.mp4')
m14.video_small.attach(io: file14, filename: '14.mp4')
m15.video_small.attach(io: file15, filename: '15.mp4')
m16.video_small.attach(io: file16, filename: '16.mp4')
m17.video_small.attach(io: file17, filename: '17.mp4')
m18.video_small.attach(io: file18, filename: '18.mp4')

# m1.video_small.attach(io: File.open("../vids_small/1.mp4"), filename: "1.mp4")
# m2.video_small.attach(io: File.open("../vids_small/2.mp4"), filename: "2.mp4")
# m3.video_small.attach(io: File.open("../vids_small/3.mp4"), filename: "3.mp4")
# m4.video_small.attach(io: File.open("../vids_small/4.mp4"), filename: "4.mp4")
# m5.video_small.attach(io: File.open("../vids_small/5.mp4"), filename: "5.mp4")
# m6.video_small.attach(io: File.open("../vids_small/6.mp4"), filename: "6.mp4")
# m7.video_small.attach(io: File.open("../vids_small/7.mp4"), filename: "7.mp4")
# m8.video_small.attach(io: File.open("../vids_small/8.mp4"), filename: "8.mp4")
# m9.video_small.attach(io: File.open("../vids_small/9.mp4"), filename: "9.mp4")
# m10.video_small.attach(io: File.open("../vids_small/10.mp4"), filename: "10.mp4")
# m11.video_small.attach(io: File.open("../vids_small/11.mp4"), filename: "11.mp4")
# m12.video_small.attach(io: File.open("../vids_small/12.mp4"), filename: "12.mp4")
# m13.video_small.attach(io: File.open("../vids_small/13.mp4"), filename: "13.mp4")
# m14.video_small.attach(io: File.open("../vids_small/14.mp4"), filename: "14.mp4")
# m15.video_small.attach(io: File.open("../vids_small/15.mp4"), filename: "15.mp4")
# m16.video_small.attach(io: File.open("../vids_small/16.mp4"), filename: "16.mp4")
# m17.video_small.attach(io: File.open("../vids_small/17.mp4"), filename: "17.mp4")
# m18.video_small.attach(io: File.open("../vids_small/18.mp4"), filename: "18.mp4")

# genres
g1=Genre.new
g1.name='Action'

g2=Genre.new
g2.name='Comedy'

g3=Genre.new
g3.name='Family'

g4=Genre.new
g4.name='Romance'

g1.save
g2.save
g3.save
g4.save


#labels (assigning genres to movies)

m1 = Movie.where("title like '%Spider-Verse'").first
g1 = Genre.where("name = 'Action'").first

l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Face/Off'").first
g1 = Genre.where("name = 'Action'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Kick-Ass'").first
g1 = Genre.where("name = 'Action'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Rock'").first
g1 = Genre.where("name = 'Action'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Air'").first
g1 = Genre.where("name = 'Action'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Angels'").first
g1 = Genre.where("name = 'Romance'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Treasure'").first
g1 = Genre.where("name = 'Family'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Apprentice'").first
g1 = Genre.where("name = 'Comedy'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Trespass'").first
g1 = Genre.where("name = 'Romance'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Vegas'").first
g1 = Genre.where("name = 'Romance'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Mandy'").first
g1 = Genre.where("name = 'Romance'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Adaptation'").first
g1 = Genre.where("name = 'Comedy'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Dad'").first
g1 = Genre.where("name = 'Romance'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Croods'").first
g1 = Genre.where("name = 'Family'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Bully'").first
g1 = Genre.where("name = 'Family'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Dangerous'").first
g1 = Genre.where("name = 'Action'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%One'").first
g1 = Genre.where("name = 'Comedy'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%G-Force'").first
g1 = Genre.where("name = 'Family'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Spider-Verse'").first
g1 = Genre.where("name = 'Family'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Kick-Ass'").first
g1 = Genre.where("name = 'Comedy'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Air'").first
g1 = Genre.where("name = 'Romance'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Apprentice'").first
g1 = Genre.where("name = 'Family'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%Dad'").first
g1 = Genre.where("name = 'Comedy'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save

m1 = Movie.where("title like '%G-Force'").first
g1 = Genre.where("name = 'Comedy'").first
l1=Label.new
l1.movie_id=m1.id
l1.genre_id=g1.id
l1.save









