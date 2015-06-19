window.KnackInit = function($) { 
	if (!Knack.session.user) {
  Knack.user.save({
         email: "nicolas@knackhq.com",
         password: "nic",
  }, {
    success: function () {},
    error: function () {}
  });
}

}