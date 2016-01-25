import Ember from 'ember';

var workspace_url_path = "/assets/workspace/";
export default Ember.Route.extend({
		afterModel: function(transition) {
			console.log("XXX afterModel BEGIN");
			var self = this;
			var h5pjson_fn = workspace_url_path + "/" + self.get('path') + "/content/content.json";
			return Ember.$.getJSON(h5pjson_fn).then(function(res) {
					self.content = res.responseJSON ;
					console.log("XXX: content set to " + self.content);
			});
			console.log("XXX afterModel END");
		}
});
