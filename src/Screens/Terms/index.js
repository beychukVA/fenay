import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useStyles } from "../../constant/customStyle";
import HeaderComponent from "../../component/Header";
import SongPlayer from "../../component/SongPlayer";
import ChatComponent from "../../component/Chat";

const TermsScreen = ({ setSongUrl, setSongDetails }) => {
  const classes = useStyles();

  const generalLinks = [
    {
      key: 1,
      name: "About",
      content: (
        <div>
          <Typography className={classes.termsDetails}>
            Finay is a green decentralized platform built to meet the needs of
            the musical community. By building on the Algorand blockchain, Finay
            is able to offer free minting of eco-friendly NFTs, eliminating the
            pollution and gas fees associated with the industry.
          </Typography>
          <Typography className={classes.termsDetails}>
            We believe that through the advancement of technology, we can make
            the music industry more equitable for the musicians who put in the
            hard work for the music we love. Our platform offers artists control
            over 97.5% of the profits from their sales, making it the most
            working professional-friendly place to market your work online.
          </Typography>
          <Typography className={classes.termsTitle}>
            BACKSTAGE PASSES
          </Typography>
          <Typography className={classes.termsDetails}>
            With the power of access NFTs, we now offer fans an opportunity to
            connect on a more personal level with the artists they love.
            Marketed as Backstage Passes, fans can use them to get behind the
            scenes access to interviews, tutorials, never before seen footage or
            mixes, and much more.
          </Typography>
          <Typography className={classes.termsDetails}>
            Artists will set their own Backstage Pass prices, allowing further
            control over their hard work and earnings, and determine what
            exclusive content to offer Backstage Pass owners. Content available
            through your Backstage Pass is limited only by your creativity, and
            can include:
          </Typography>

          <Typography className={classes.termsPoints}>Custom songs</Typography>
          <Typography className={classes.termsPoints}>
            Crowd-sourced collabs
          </Typography>
          <Typography className={classes.termsPoints}>
            Transcriptions of your music
          </Typography>
          <Typography className={classes.termsPoints}>Samples</Typography>
          <Typography className={classes.termsPoints}>Stems</Typography>
          <Typography className={classes.termsPoints}>
            Exclusive performances
          </Typography>
          <Typography className={classes.termsPoints}>
            Anything else you can imagine!
          </Typography>
        </div>
      ),
    },
    {
      key: 2,
      name: "Blog",
      content: "",
    },
    {
      key: 3,
      name: "Jobs",
      content: "",
    },
  ];

  const supportLinks = [
    {
      key: 4,
      name: "Getting Started",
      content: "",
    },
    {
      key: 5,
      name: "Purchase Support",
      content: "",
    },
    {
      key: 6,
      name: "Contact",
      content: "",
    },
    {
      key: 7,
      name: "FAQS",
      content: (
        <div>
          <Typography className={classes.termsDetails}>
            HOW TO CREATE AN ACCOUNT
          </Typography>
          <Typography className={classes.termsDetails}>
            To create a Finay account:
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to finay.com and click Sign Up.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Enter your name, email or mobile phone number, password, date of
            birth and gender.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Click Create My Account.
          </Typography>
          <Typography className={classes.termsDetails}>
            4. To finish creating your account, you’ll need to confirm your
            email address or mobile phone{" "}
          </Typography>
          number. If you're having a problem creating a Finay account: To let us
          know about the problem you're experiencing while creating a Finay
          account, you can{" "}
          <Typography className={classes.termsDetails}>
            fill out [this form], or email help@finay.com.
          </Typography>
          <Typography className={classes.termsDetails}>
            If you're having a problem logging in:
          </Typography>
          <Typography className={classes.termsDetails}>
            • If you're having trouble with your password, here is how to reset
            your password.
          </Typography>
          <Typography className={classes.termsDetails}>
            • If you still can't log in, please email us at help@finay.com.
          </Typography>
          <Typography className={classes.termsDetails}>
            HOW TO APPLY FOR A PROFESSIONAL ACCOUNT
          </Typography>
          A professional account is required to add original content to the
          Finay marketplace. Artists, educators, therapists and vendors will
          need an approved professional account to sell their work on Finay. If
          you are an existing user who would like to apply to have your account
          upgraded to{" "}
          <Typography className={classes.termsDetails}>
            Professional, please complete the following steps:
          </Typography>
          <Typography className={classes.termsDetails}>1. Go to </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            If you do not already have a Finay account, or would like to make a
            separate Professional account for{" "}
          </Typography>
          your work, complete the following steps:
          <Typography className={classes.termsDetails}>
            1. Go to the landing page and click Sign Up.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. On the first page of the signup process, you’ll see a link to
            Apply For A Professional Account.{" "}
          </Typography>
          Click it.
          <Typography className={classes.termsDetails}>
            3. Complete the application process. FINISH WHEN WE HAVE A PROCESS
            IN PLACE FOR THIS
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            MANAGING YOUR FINAY ACCOUNT
          </Typography>
          <Typography className={classes.termsDetails}>
            LOGGING IN TO FINAY
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To login to your Finay account, visit finay.com and click Sign
            In.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Enter your username/email and password when prompted.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. You are now signed into Finay.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            LOGGING OUT OF FINAY
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Click the three red dots icon in the upper left corner of the
            home page.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Scroll down to Log Out and click it.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. You have now logged out of Finay.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO FIND YOUR ACCOUNT SETTINGS
          </Typography>
          <Typography className={classes.termsDetails}>
            There are two ways to find the account settings menu.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            1. On the header bar at the top of the website, select the person
            icon on the upper right.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select Settings from the drop down menu.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. This will take you to your account settings.
          </Typography>
          <Typography className={classes.termsDetails}>
            You can also reach your account settings from your profile with the
            following steps:
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to your profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. To the right of your profile picture are four icons.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            3. The settings icon is on the far right, marked with a gear symbol.
            Select it.
          </Typography>
          <Typography className={classes.termsDetails}>
            4. This will take you to your account settings.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            CHANGING YOUR USERNAME
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to Settings. HYPERLINK “settings” IN THIS SENTENCE TO THE
            Settings PAGE
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Scroll down to Username/Login. Here you can change your username
            by selecting the text box and{" "}
          </Typography>
          making your changes.
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            CHANGING YOUR PASSWORD
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to Settings. HYPERLINK “settings” IN THIS SENTENCE TO THE
            Settings PAGE
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Scroll down to Username/Login. Here you can change your password.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO SET UP TWO-FACTOR AUTHENTICATION
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to Settings. HYPERLINK “settings” IN THIS SENTENCE TO THE
            Settings PAGE
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Scroll down to Username/Login.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Enable Two Factor Authentication, then follow the prompts to
            complete setup.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            FORGOT YOUR PASSWORD OR USERNAME?
          </Typography>
          <Typography className={classes.termsDetails}>
            1. If you’re having trouble logging in, simply click the “Forgot
            your password or username?” link{" "}
          </Typography>
          on the sign-in page.
          <Typography className={classes.termsDetails}>
            2. Follow the prompts to reset your username or password. You’ll
            need access to your email for this.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Your new password should be set.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO SET YOUR ACCOUNT PERMISSIONS
          </Typography>
          You have control over who can view your profile, follow you, and how
          your followers can interact with you. To access your account
          permissions, first{" "}
          <Typography className={classes.termsDetails}>
            go to Settings > Permissions, where you have a variety of options
            about how followers can find and{" "}
          </Typography>
          interact with your profile.
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO DEACTIVATE YOUR ACCOUNT
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to Settings and scroll down to Deactivate Your Account.
            HYPERLINK “settings” IN THIS SENTENCE{" "}
          </Typography>
          TO THE Settings PAGE
          <Typography className={classes.termsDetails}>
            2. Complete the required form, confirm and submit.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Your account will be deactivated.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            CREATE AND EDIT YOUR PROFILE
          </Typography>
          Your profile tells the world who you are as a music lover or artist.
          You can choose what you share, such as music, lessons and NFTs you
          own. Artists can use it to share their content or upcoming releases.
          You can see your own posts and posts you've been tagged in. Your
          Account Settings will help{" "}
          <Typography className={classes.termsDetails}>
            you manage tags and review who can add and see things on your
            profile.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO ADD/CHANGE YOUR PROFILE PICTURE
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to your profile by clicking the Finay logo in the upper right
            corner of the home page.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Click on the edit icon on your profile picture.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Upload a photo, then center and preview it before clicking
            Finish.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO ADD/CHANGE YOUR HEADER PICTURE
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to your profile by clicking the Finay logo in the upper right
            corner of the home page.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Click on the edit icon on your header photo.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Upload a photo, then center and preview it before clicking
            Finish.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO ADD/CHANGE YOUR PROFILE DESCRIPTION
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to your profile by clicking the Finay logo in the upper right
            corner of the home page.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Click on the edit icon next to the description you want to edit.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Compose your description, then click Finish when you’re ready
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO EDIT YOUR PROFILE INFORMATION
          </Typography>
          <Typography className={classes.termsDetails}>
            1. First, go to your profile by clicking the Finay icon in the upper
            right corner of the home page.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select the Edit icon next to the element you want to change on
            your profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Make your edits, then click Finish when you’re ready.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO CONNECT SOCIAL MEDIA TO YOUR FINAY PAGE
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to Settings. HYPERLINK “settings” IN THIS SENTENCE TO THE
            Settings PAGE
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Scroll down until you see Connected Socials. Select the social
            media network you’d like to{" "}
          </Typography>
          connect. 3. This will take you to the login page for your social media
          account. Login and your account will be connected to Finay before
          returning you to{" "}
          <Typography className={classes.termsDetails}>
            the Finay app or website.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO VIEW AND INTERACT WITH YOUR FEED
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To view your feed, first click on the icon with three gray bars
            in the upper right corner.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select “Community” from the popup menu. This will take you to
            your feed, which contains posts{" "}
          </Typography>
          from people you follow.
          <Typography className={classes.termsDetails}>
            3. You can like or comment on posts you see, as well as share them
            to your followers.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO MAKE A POST
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To make a post, first click on the icon with three gray bars in
            the upper right corner, then{" "}
          </Typography>
          select Explore from the menu. 2. At the top of the explore page,
          you’ll see a blank text field to draft your post in. You can add
          pictures, video, gifs, location, and links{" "}
          <Typography className={classes.termsDetails}>
            to your post. You can also tag other users. HYPERLINK “tag other
            users” TO “HOW TO TAG ANOTHER USER{" "}
          </Typography>
          IN A POST OR COMMENT” article 3. You can also choose whether the post
          will be viewable by the entire public, only by your followers, or, if
          you are posting with a{" "}
          <Typography className={classes.termsDetails}>
            professional account, only by your Backstage Pass holders.
          </Typography>
          <Typography className={classes.termsDetails}>
            4. When your post is drafted, click Post.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            5. Your post should now be viewable to you and your followers on
            your feed.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO TAG ANOTHER USER IN A POST OR COMMENT
          </Typography>
          1. When making a post or comment, simply type to @ symbol, followed by
          the username of the user you want to tag. Examples: @aerosmith{" "}
          <Typography className={classes.termsDetails}>
            @rollingstones{" "}
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO MANAGE A POST
          </Typography>
          <Typography className={classes.termsDetails}>
            1. On the post you would like to manage, click the three grey dots
            in the top right to see your{" "}
          </Typography>
          options.
          <Typography className={classes.termsDetails}>
            2. Select “Manage Post” from the drop down menu.
          </Typography>
          3. This will open a menu where you can manage your post by changing
          privacy settings, turning off or limiting commenting, promoting,
          deleting,{" "}
          <Typography className={classes.termsDetails}>
            and other options.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO MANAGE YOUR IN-APP NOTIFICATIONS
          </Typography>
          <Typography className={classes.termsDetails}>
            You can choose what type of events, collections or users you want to
            receive notifications from and how{" "}
          </Typography>
          you receive those notifications.
          <Typography className={classes.termsDetails}>
            1. Go to Settings.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Scroll down to Notifications [or maybe this stuff goes under
            Permissions] FINISH WHEN WE HAVE{" "}
          </Typography>
          SETTINGS MENU UPDATED
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO MANAGE YOUR FINAY NOTIFICATIONS
          </Typography>
          <Typography className={classes.termsDetails}>
            You can control what notifications your phone shows you from Finay.
          </Typography>
          <Typography className={classes.termsDetails}>
            1. On your phone, go to your Settings app.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Go to Notifications > Finay.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Your phone will guide you through your notification options.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO FOLLOW ANOTHER USER{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Type their name into the search box and go to their profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Click the Follow button under their profile information on the
            left.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. You are now following this user.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO UNFOLLOW ANOTHER USER
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Type the name of a user you’re following into the search box and
            go to their profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Click the options button under their profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Click Unfollow.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO BLOCK ANOTHER USER
          </Typography>
          <Typography className={classes.termsDetails}>
            You can prevent specific users from contacting you, viewing your
            profile, or appearing on your feed. To{" "}
          </Typography>
          do so, complete the following steps.
          <Typography className={classes.termsDetails}>
            1. Type their name into the search box and go to their profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Click the options button under their profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Click Block User.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            DIRECT MESSAGING
          </Typography>
          <Typography className={classes.termsDetails}>
            You can send and receive direct messages from your followers through
            Finay’s messaging feature. To send{" "}
          </Typography>
          a new direct message:
          <Typography className={classes.termsDetails}>
            1. By clicking the arrow on the left side of the page, you can find
            the Direct Messages icon. Click{" "}
          </Typography>
          it.
          <Typography className={classes.termsDetails}>
            2. On the Direct Messages page, you can search for users you follow
            to send messages to, and see{" "}
          </Typography>
          conversations you’re having with other users.
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO START A GROUP CHAT
          </Typography>
          <Typography className={classes.termsDetails}>
            1. For this feature, you’ll need a Professional account.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. By clicking the arrow on the left side of the page, you can find
            the Direct Messages icon. Click{" "}
          </Typography>
          it. 3. On the Direct Messages page, you can create a group chat, send
          group invites to your followers and choose your group chat’s privacy
          settings{" "}
          <Typography className={classes.termsDetails}>
            (i.e. chat rooms only for Backstage Pass holders, etc.).
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO MANAGE A GROUP CHAT
          </Typography>
          <Typography className={classes.termsDetails}>
            1. First, enter the chat room you wish to manage. At [LOCATION],
            you’ll see a small settings icon{" "}
          </Typography>
          that will take you to your group chat options.
          <Typography className={classes.termsDetails}>
            2. Here, you’ll be able to appoint moderators, remove users from the
            group, and manage chat{" "}
          </Typography>
          permissions.
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO PURCHASE AN NFT
          </Typography>
          1. You can find NFTs by searching for an artist, collection, or NFT
          name in the search bar. You can also browse collections on an artist’s
          page,{" "}
          <Typography className={classes.termsDetails}>
            or find NFTs on the secondary market by searching other user’s
            collections and auctions.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            2. By clicking on the NFT you want to buy, you’ll be able to view,
            sample, buy, or add it to your{" "}
          </Typography>
          wishlist. Click Buy Now to start the purchase. 3. In the next window,
          you’ll be asked to confirm your payment method and finalize the
          transaction. Be careful! Once you’ve finalized your{" "}
          <Typography className={classes.termsDetails}>
            payment it can’t be reversed.
          </Typography>
          <Typography className={classes.termsDetails}>
            4. The NFT will be available in your Finay account as soon as the
            transaction processes complete.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO PURCHASE A BACKSTAGE PASS FROM AN ARTIST
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to the artist’s profile.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select the Backstage Pass button next to their profile picture.
            COMPLETE WHEN DEVELOPMENT ADDS{" "}
          </Typography>
          THIS FEATURE
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            SECONDARY MARKETPLACE EXPLANATION{" "}
          </Typography>
          Anything you buy on Finay can be resold on the secondary market to
          another user, including NFTs and Backstage Passes. To browse the
          secondary{" "}
          <Typography className={classes.termsDetails}>
            market, follow these steps:
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To reach the marketplace, click the three grey bars menu icon in
            the top right of the home page.{" "}
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select Explore from the menu.
          </Typography>
          3. This will bring you to the secondary marketplace, where you can buy
          from and sell to other users. You can use the search bar to find other{" "}
          <Typography className={classes.termsDetails}>
            users, collections, or individual works.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO SELL AN NFT ON THE SECONDARY MARKET
          </Typography>
          Finay offers users the ability to resell their assets to other users.
          To do this, you’ll need to list your asset on the secondary market.
          Here’s how{" "}
          <Typography className={classes.termsDetails}>
            to get started:
          </Typography>
          <Typography className={classes.termsDetails}>
            1. First you’ll need to go to your NFT{" "}
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            WHERE CAN I SEE MY ASSETS?
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO CONNECT A PAYMENT METHOD
          </Typography>
          Finay accepts a variety of fiat and cryptocurrencies as payment
          through Paypal, Coinbase, Torus, and WalletConnect. To connect your
          payment method,{" "}
          <Typography className={classes.termsDetails}>
            follow these steps:
          </Typography>
          <Typography className={classes.termsDetails}>
            1. Go to settings by clicking on the settings icon next to your
            profile picture.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Under “Payment Method”, select one of the four options.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Complete the steps required by your payment provider, then return
            to finay.com.
          </Typography>
          <Typography className={classes.termsDetails}>
            4. Your payment method should now be connected to your account.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            HOW TO CREATE A BACKSTAGE PASS
          </Typography>
          With the power of access NFTs, we now offer fans an opportunity to
          connect on a more personal level with the artists they love. Marketed
          as{" "}
          <Typography className={classes.termsDetails}>
            Backstage Passes, fans can use them to get behind the scenes access
            to interviews, tutorials, never{" "}
          </Typography>
          before seen footage or mixes, and much more.
          <Typography className={classes.termsDetails}></Typography>
          Artists will set their own Backstage Pass prices, allowing further
          control over their hard work and earnings, and determine what
          exclusive content to offer Backstage Pass owners. Custom songs,
          crowd-sourced collabs, transcriptions of your music, samples, stems,
          exclusive performances: the{" "}
          <Typography className={classes.termsDetails}>
            content available through your Backstage Pass is limited only by
            your creativity.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          1. To create a Backstage Pass, you’ll need a Finay Professional
          account. If you have not applied for a Professional account, you can
          find out how to{" "}
          <Typography className={classes.termsDetails}>
            do so HERE(link). If you’re already a Professional user, click on
            the icon with three gray bars in the{" "}
          </Typography>
          upper right corner.
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>FIXED SALE</Typography>
          <Typography className={classes.termsDetails}>
            1. To create a Fixed Sale, first click on the icon with three gray
            bars in the upper right corner.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select “Create” from the popup menu, then select the “Create
            Media” icon.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Make sure Fixed Price is selected in red, enter a price under
            “Instant Price”, and click the next{" "}
          </Typography>
          button. 4. Under royalties, you can split profits from the sale among
          any number of individuals at any percentages. Simply search for a user
          under the Name menu, select the user you want to pay, choose a royalty
          percentage, and repeat this process as necessary. When you’ve assigned
          all the royalties,{" "}
          <Typography className={classes.termsDetails}>click next.</Typography>
          5. On the next screen you’ll be able to upload the file or files you
          want to mint as NFTs. Files can be uploaded as standalone, added to an
          existing collection, or uploaded as a new collection. You can also
          choose to upload a sample for potential buyers to try, and choose
          whether content will be unlocked at purchase, or at a later date for
          pre-sale functionality. When everything is set to your liking, click
          next to proceed to the final step{" "}
          <Typography className={classes.termsDetails}>
            in the process.
          </Typography>
          6. You can title your work here, label it by album, artist,
          co-writers, collaborators, session personnel, write a description of
          the work, add album/
          <Typography className={classes.termsDetails}>
            collection/cover art, and then press “Finish” to mint your NFT or
            NFTs.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            TIMED AUCTION
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To create a Timed Auction, first click on the icon with three
            gray bars in the upper right corner.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select “Create” from the popup menu, then select the “Create
            Media” icon.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Select “Timed Auction” and choose a start and end date and time
            for your auction, then press next.
          </Typography>
          4. Under royalties, you can split profits from the sale among any
          number of individuals at any percentages. Simply search for a user
          under the Name menu, select the user you want to pay, choose a royalty
          percentage, and repeat this process as necessary. When you’ve assigned
          all royalties, click{" "}
          <Typography className={classes.termsDetails}>next.</Typography>
          5. On the next screen you’ll be able to upload the file or files you
          want to put up for auction. Files can be uploaded as standalone, added
          to an existing collection, or uploaded as a new collection. You can
          also choose to upload a sample for potential buyers to try, and choose
          whether content will be unlocked at the end of the auction, or at a
          later date for pre-sale functionality. When everything is set to your
          liking, click next to{" "}
          <Typography className={classes.termsDetails}>
            proceed to the final step in the process.
          </Typography>
          6. You can title your work here, label it by album, artist,
          co-writers, collaborators, session personnel, write a description of
          the work, add album/
          <Typography className={classes.termsDetails}>
            collection/cover art, and then press “Finish” to schedule your
            auction.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            ONGOING AUCTION
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To create an Ongoing Auction, first click on the icon with three
            grey bars in the upper right corner.
          </Typography>
          <Typography className={classes.termsDetails}>
            2. Select “Create” from the popup menu, then select the “Create
            Media” icon.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Select “Ongoing Auction” and choose a start date and time for
            your auction, enter a minimum bid,{" "}
          </Typography>
          then press next. 4. Under royalties, you can split profits from the
          sale among any number of individuals at any percentages. Simply search
          for a user under the “Name” menu, select the user you want to pay,
          choose a royalty percentage, and repeat this process as necessary.
          When you’ve assigned all royalties,{" "}
          <Typography className={classes.termsDetails}>click next.</Typography>
          5. On the next screen you’ll be able to upload the file or files you
          want to put up for auction. Files can be uploaded as standalone, added
          to an existing collection, or uploaded as a new collection. You can
          also choose to upload a sample for potential buyers to try, and choose
          whether content will be unlocked at the end of the auction, or at a
          later date for pre-sale functionality. When everything is set to your
          liking, click next to{" "}
          <Typography className={classes.termsDetails}>
            proceed to the final step in the process.
          </Typography>
          6. You can title your work here, label it by album, artist,
          co-writers, collaborators, session personnel, write a description of
          the work, add album/
          <Typography className={classes.termsDetails}>
            collection/cover art, and then press “Finish” to schedule your
            auction.
          </Typography>
          <Typography className={classes.termsDetails}></Typography>
          <Typography className={classes.termsDetails}>
            POST CONTENT EXCLUSIVELY TO BACKSTAGE PASS HOLDERS
          </Typography>
          <Typography className={classes.termsDetails}>
            1. To release content exclusively for your subscribers, first click
            on the icon with three gray bars in{" "}
          </Typography>
          the upper right corner.
          <Typography className={classes.termsDetails}>
            2. Select “Create” from the popup menu, then select the “Create
            Media” icon.
          </Typography>
          <Typography className={classes.termsDetails}>
            3. Select “For Backstage Pass”, then press next.
          </Typography>
          4. Under royalties, you can split profits from the sale among any
          number of individuals at any percentages. Simply search for a user
          under the “Name” menu, select the user you want to pay, choose a
          royalty percentage, and repeat this process as necessary. When you’ve
          assigned all royalties,{" "}
          <Typography className={classes.termsDetails}>click next.</Typography>
          5. On the next screen you’ll be able to upload the file or files you
          want to share with Backstage Pass holders. Files can be uploaded as
          standalone, added to an existing collection, or uploaded as a new
          collection. You can also choose to upload a sample for non-subscribers
          to try, and choose whether content will be shared with subscribers
          immediately, or at a later scheduled date. When everything is set to
          your liking, click next to{" "}
          <Typography className={classes.termsDetails}>
            proceed to the final step in the process.
          </Typography>
          6. You can title your work here, label it by album, artist,
          co-writers, collaborators, session personnel, write a description of
          the work, add album/
          <Typography className={classes.termsDetails}>
            collection/cover art, and then press “Finish” to post your work.
          </Typography>
        </div>
      ),
    },
  ];

  const legalLinks = [
    {
      key: 8,
      name: "Terms of Service",
      content: "",
    },
    {
      key: 9,
      name: "Community Guidelines",
      content: "",
    },
    {
      key: 10,
      name: "Privacy Notice",
      content: "",
    },
    {
      key: 11,
      name: "Privacy Choices",
      content: "",
    },
    {
      key: 12,
      name: "CA Privacy Disclosure",
      content: "",
    },
    {
      key: 13,
      name: "DMCA Guidelines",
      content: "",
    },
    {
      key: 14,
      name: "Trademark Policy",
      content: "",
    },
    {
      key: 15,
      name: "Trademark Guldelines",
      content: "",
    },
    {
      key: 16,
      name: "Terms of Sale",
      content: "",
    },
    {
      key: 17,
      name: "Cooke Notice",
      content: "",
    },
    {
      key: 18,
      name: "Terms & Conditions",
      content: "",
    },
    {
      key: 19,
      name: "Code of Conduct",
      content: "",
    },
    {
      key: 20,
      name: "Accessiblity",
      content: "",
    },
    {
      key: 21,
      name: "Blog",
      content: "",
    },
    {
      key: 22,
      name: "Transparency Report",
      content: "",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [value, setValue] = useState("About");
  const [content, setContent] = useState(
    <div>
      <Typography className={classes.termsDetails}>
        Finay is a green decentralized platform built to meet the needs of the
        musical community. By building on the Algorand blockchain, Finay is able
        to offer free minting of eco-friendly NFTs, eliminating the pollution
        and gas fees associated with the industry.
      </Typography>
      <Typography className={classes.termsDetails}>
        We believe that through the advancement of technology, we can make the
        music industry more equitable for the musicians who put in the hard work
        for the music we love. Our platform offers artists control over 97.5% of
        the profits from their sales, making it the most working
        professional-friendly place to market your work online.
      </Typography>
      <Typography className={classes.termsTitle}>BACKSTAGE PASSES</Typography>
      <Typography className={classes.termsDetails}>
        With the power of access NFTs, we now offer fans an opportunity to
        connect on a more personal level with the artists they love. Marketed as
        Backstage Passes, fans can use them to get behind the scenes access to
        interviews, tutorials, never before seen footage or mixes, and much
        more.
      </Typography>
      <Typography className={classes.termsDetails}>
        Artists will set their own Backstage Pass prices, allowing further
        control over their hard work and earnings, and determine what exclusive
        content to offer Backstage Pass owners. Content available through your
        Backstage Pass is limited only by your creativity, and can include:
      </Typography>

      <Typography className={classes.termsPoints}>Custom songs</Typography>
      <Typography className={classes.termsPoints}>
        Crowd-sourced collabs
      </Typography>
      <Typography className={classes.termsPoints}>
        Transcriptions of your music
      </Typography>
      <Typography className={classes.termsPoints}>Samples</Typography>
      <Typography className={classes.termsPoints}>Stems</Typography>
      <Typography className={classes.termsPoints}>
        Exclusive performances
      </Typography>
      <Typography className={classes.termsPoints}>
        Anything else you can imagine!
      </Typography>
    </div>
  );
  const [chatStatus, setChatStatus] = useState(false);
  const [calendarStatus, setCalendarStatus] = useState(false);

  const handleSelectedItem = (index, title, type) => {
    setSelectedIndex(index);
    setContent(type.filter((item) => item.name === title)[0].content);
    setValue(title);
  };

  const modalStatus = () => {
    setChatStatus(false);
    setCalendarStatus(false);
  };

  const blurStatus = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.title = `${value} | Finay`;
  }, [value]);

  return (
    <Box className={open ? classes.blur : ""}>
      <HeaderComponent />
      <Container
        maxWidth="lg"
        sx={{ position: "relative" }}
        className={classes.termsContainer}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={3}>
            <Typography className={classes.generalHeading}>General</Typography>
            <List sx={{ marginBottom: "58px" }}>
              {generalLinks.map((link, index) => {
                return (
                  <ListItem
                    disablePadding
                    key={index}
                    onClick={() =>
                      handleSelectedItem(link.key, link.name, generalLinks)
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    <ListItemText
                      primary={
                        <Typography className={classes.link}>
                          {link.name}
                        </Typography>
                      }
                      className={classes.link}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Typography className={classes.generalHeading}>Legal</Typography>
            <List sx={{ marginBottom: "58px" }}>
              {legalLinks.map((link, index) => {
                return (
                  <ListItem
                    disablePadding
                    key={index}
                    onClick={() =>
                      handleSelectedItem(link.key, link.name, legalLinks)
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    <ListItemText
                      primary={
                        <Typography className={classes.link}>
                          {link.name}
                        </Typography>
                      }
                      className={classes.link}
                    />
                  </ListItem>
                );
              })}
            </List>
            <Typography className={classes.generalHeading}>Support</Typography>
            <List sx={{ marginBottom: "58px" }}>
              {supportLinks.map((link, index) => {
                return (
                  <ListItem
                    disablePadding
                    key={index}
                    onClick={() =>
                      handleSelectedItem(link.key, link.name, supportLinks)
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    <ListItemText
                      primary={
                        <Typography className={classes.link}>
                          {link.name}
                        </Typography>
                      }
                      className={classes.link}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} md={9} sx={{ marginBottom: "100px" }}>
            <Box className={classes.termsDescription}>
              <Typography className={classes.termsTitle}>{value}</Typography>
              <Typography className={classes.termsDetails}>
                {content}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          style={{
            width: "auto",
            position: "fixed",
            bottom: 200,
            left: 0,
            zIndex: 99,
          }}
        >
          <ChatComponent
            blur={blurStatus}
            modal={chatStatus}
            calendarModal={calendarStatus}
            chatModalState={modalStatus}
            setSongUrl={setSongUrl}
            setSongDetails={setSongDetails}
          />
        </Box>
      </Container>
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
};

export default TermsScreen;
