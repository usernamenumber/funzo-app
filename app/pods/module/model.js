import DS from 'ember-data';
import Ember from 'ember';
console.log("1");
console.log(DS);
console.log("2");
var workspace_url_path = "/assets/workspace/";
export default DS.Model.extend({
    path:	 DS.attr(),  // dir name relative to workspace_url_path
    contentfoo: Ember.computed('path', function() {
		var h5pjson_fn = workspace_url_path + "/" + this.get('path') + "/content/content.json";
		return Ember.$.getJSON(h5pjson_fn).responseJSON;
    })
});

console.log("3foo");
