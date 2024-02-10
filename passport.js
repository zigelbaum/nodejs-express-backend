const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GITHUB_CLIENT_ID = "YOUR_GITHUB_ID";
const GITHUB_CLIENT_SECRET = "YOUR_GITHUB_SECRET";

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        function (accessToken, refreshToken, profile, done)
        {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) =>
{
    done(null, user);
});

passport.deserializeUser((user, done) =>
{
    done(null, user);
});
