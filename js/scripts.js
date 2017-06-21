

var User = Backbone.Model.extend({
  defaults : {
    "id"          : 0,
    "ip_address"  : "127.0.0.1",
    "username"    : "",
    "password"    : "",
    "first_name"  : "",
    "last_name"   : "",
    "group"       : []
  },
  validate : function(attrs){
    if(attrs.username === "") {
      return "nazwa użytkownika nie może byc pusta"
    };
  }
});


var Users = Backbone.Collection.extend({
  model         : User,
  comparator    : function(first, second) {

    if(first.get("group").lenght > second.get("group").lenght) {
      return -1;
    } else {
      return 1;
    }

  }
});



var UserView = Backbone.View.extend({
  initialize    : function(){
    this.listenTo(this.model,"remove", function(){
      this.$el.remove();
    });
  },
  tagName       : "li",
  template      : _.template($("#templateUser").html()),
  render        : function(){
    html = this.template( this.model.toJSON());
    this.$el.append(html);
    return this;
  }
});


var UsersView = Backbone.View.extend({
  initialize    : function(){
    this.listenTo(this.collection,"add",this.render);

  },
  tagName       : "ul",
  render        : function(){
    this.$el.empty();
    this.collection.each( this.addOne, this );
    $(id="#usersList").append(this.el);
    return this;
  },
  addOne        : function(user){
    userView = new UserView( {model : user} );
    this.$el.append( userView.render().el );
  }

});


var user1 = new User({
  "id"          : 1,
  "ip_address"  : "10.11.0.240",
  "username"    : "jurek",
  "password"    : "elan7e",
  "first_name"  : "Jerzy",
  "last_name"   : "Mączeński",
  "group"       : ["admin","user","kiera"]
});

var user2 = new User({
  "id"          : 2,
  "ip_address"  : "10.11.0.240",
  "username"    : "piotr",
  "password"    : "bulka",
  "first_name"  : "Piotr",
  "last_name"   : "Mączeński",
  "group"       : ["admin","user"]
});

var user3 = new User({
  "id"          : 3,
  "ip_address"  : "10.11.0.240",
  "username"    : "marzena",
  "password"    : "Zytulina",
  "first_name"  : "Marzena",
  "last_name"   : "Sarapata",
  "group"       : ["user"]
});


var user4 = new User({
  "id"          : 4,
  "ip_address"  : "10.11.0.240",
  "username"    : "pysior69",
  "password"    : "eko",
  "first_name"  : "Agnieszka",
  "last_name"   : "Sarapata",
  "group"       : ["user"]
});

var user5 = new User({
  "id"          : 5,
  "ip_address"  : "10.11.0.240",
  "username"    : "nowak",
  "password"    : "eko",
  "first_name"  : "Jan",
  "last_name"   : "Nowak",
  "group"       : ["user"]
});

var users = new Users([user1,user2,user3,user4]);
var usersView = new UsersView({collection : users});

usersView.render();


/*
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
 `ip_address` varchar(45) NOT NULL,
 `username` varchar(100) NULL,
 `password` varchar(255) NOT NULL,
 `salt` varchar(255) DEFAULT NULL,
 `email` varchar(100) NOT NULL,
 `activation_code` varchar(40) DEFAULT NULL,
 `forgotten_password_code` varchar(40) DEFAULT NULL,
 `forgotten_password_time` int(11) unsigned DEFAULT NULL,
 `remember_code` varchar(40) DEFAULT NULL,
 `created_on` int(11) unsigned NOT NULL,
 `last_login` int(11) unsigned DEFAULT NULL,
 `active` tinyint(1) unsigned DEFAULT NULL,
 `first_name` varchar(50) DEFAULT NULL,
 `last_name` varchar(50) DEFAULT NULL,
 `company` varchar(100) DEFAULT NULL,
 `phone` varchar(20) DEFAULT NULL,
*/
