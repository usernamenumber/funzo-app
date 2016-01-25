import DS from 'ember-data';
 
var workspace_url_path = "/assets/workspace/"
export default DS.Model.extend({
    path:	 DS.attr(),  // dir name relative to workspace_url_path
    content: Ember.computed('path', function() {
		var h5pjson_fn = workspace_url_path + "/" + this.get('path') + "/content/content.json";
		return $.getJSON(h5pjson_fn).responseJSON;
    })
});
