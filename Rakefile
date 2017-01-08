#!/usr/bin/env ruby

require 'html-proofer'

desc "Test the html and links"
task :test do
  puts "Building the site"
  sh "bundle exec jekyll build"
  puts "Checking site"
  HTMLProofer.check_directory("./_site").run
end

desc "Deploy the website to Github"
task :deploy => [:test] do
  puts "Starting Deployment"
end