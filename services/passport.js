const passprt = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passprt.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        }, (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleID: profile.id }).then((existingUser) => {
                if (existingUser) {
                    console.log('----->', existingUser);
                } else {
                    new User({ googleID: profile.id }).save();
                }
            });

        }
    )
);