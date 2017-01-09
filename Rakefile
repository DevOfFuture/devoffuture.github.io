#!/usr/bin/env ruby

require 'html-proofer'

desc "Test the html and links"
task :test do
  puts "The logic of Test Task must be here"
end

desc "Deploy the website to Github"
task :deploy => [:test] do
  puts "The Deployment logic must be here"
end

desc "Add new member to the list"
task :member do
  puts "The logic to add new member will be here"
end

task :default => [:test, :deploy] do
end
