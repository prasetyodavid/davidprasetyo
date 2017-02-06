    $(document).ready(function(){
        jQuery('.social-feed-container').socialfeed({
	


    custom_facebook:{
        urls: ['https://fbrss.com/feed/6009f36b4453aff3508cd06c4615daeee8b15f0d.xml?me'],
        limit: 5 
    },

	facebook:{
        accounts: ['me'],  //Array: Specify a list of accounts from which to pull wall posts
        limit: 10,                                   //Integer: max number of posts to load
        access_token: 'EAACEdEose0cBAPvluBEY97c8ZCZCdOQXUnTnXsbP8q1oLMeQXz3R4VUp7nZCDvokSvZBpAaXEeANUJDnZB2onxylmb3mFf8VaDGEdUf5qwOkZBFoWeh6wScrOekxZB2XMUQkbveZCKnaKt5jxJEyDu3H5j6DzU5S6JcklScfaMrZAvK7pzSbIjuPb'  //String: "APP_ID|APP_SECRET"
    },

    // GOOGLEPLUS
    google:{
         accounts: ['106713081190959424667'],                //Array: Specify a list of accounts from which to pull posts
         limit: 2,                                  //Integer: max number of posts to load
         access_token: 'AIzaSyDnLFZ1yzJ2_nBds0O0n_TbO4QuaVk9ibU'//String: G+ access token
     },

	twitter:{
        accounts: ['@davithace'],                    
        limit: 5,                                   
        consumer_key: 'vTubRvviI47KnzXUyDpERLX5j',          
        consumer_secret: 'HVFbx4LfY4YXhyVHRR13ZATU34Evs5hKjSa60rxNkbUo0uD64i' 
     },

     instagram:{
        accounts: ['@davithace'],  //Array: Specify a list of accounts from which to pull posts
        limit: 2,                                   //Integer: max number of posts to load
        client_id: ' 7cef92bee8f14211ba027a87cf9a65ed',       //String: Instagram client id (option if using access token)
        access_token: '1393380568.1677ed0.50831b027ec1482d85e48f12ec670da6' //String: Instagram access token
    },

	blogspot :{
	      accounts: ['davidprasetyo.com'], //Array: Specifiy a list of rss feed from which to pull posts
	      limit: 10                                     //Integer: max number of posts to load for each url
		 },
            // GENERAL SETTINGS
            length:400,
            show_media:true,                                //Boolean: if false, doesn't display any post images
    		media_min_width: 100,
        });
    });
