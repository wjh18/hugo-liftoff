// From https://github.com/sharadcodes/hugo-shortcodes-netlify-cms/
CMS.registerEditorComponent({
  id: "figure",
  label: "Figure",
  fields: [{
          name: "title",
          label: "Figure Title",
          widget: "string"
      },
      {
          name: "src",
          label: "Figure SRC",
          widget: "string"
      },
  ],
  pattern: /{{< figure src="([a-zA-Z0-9-_ ]+)" title="([a-zA-Z0-9-_ ]+)" >}}/,
  fromBlock: function(match) {
      return {
          title: match[1],
          src: match[2],
      };
  },
  toBlock: function(obj) {
      return `{{< figure src="${obj.src}" title="${obj.title}" >}}`;
  },
  toPreview: function(obj) {
      return `<figure><img src=${obj.src} alt=${obj.title}><figcaption>${obj.title}</figcaption></figure>`;
  },
});
CMS.registerEditorComponent({
  id: "gist",
  label: "Gist",
  fields: [{
          name: "username",
          label: "Github Username",
          widget: "string"
      },
      {
          name: "gid",
          label: "Gist ID",
          widget: "string"
      },
  ],
  pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
  fromBlock: function(match) {
      return {
          username: match[1],
          gid: match[2],
      };
  },
  toBlock: function(obj) {
      return `{{< gist ${obj.username} ${obj.gid} >}}`;
  },
  toPreview: function(obj) {
      return `{{< gist ${obj.username} ${obj.gid} >}}`;
  },
});
CMS.registerEditorComponent({
  id: "instagram",
  label: "Instagram",
  fields: [
    {
        name: "pid",
        label: "Post id",
        widget: "string"
    },
    {
      name: "hidecaption",
      label: "Hide caption",
      widget: "boolean"
    }
  ],
  pattern: /{{< instagram (?<pid>[a-zA-Z0-9]+)\s{0,}(?<hidecaption_flag>hidecaption)?\s+>}}/,
  fromBlock: function(match) {
      return {
          pid: match[1],
          hidecaption: match[2]
      };
  },
  toBlock: function(obj) {
      return `{{< instagram ${obj.pid} ${
        obj.hidecaption ? "hidecaption " : ""
      }>}}`;
  },
  toPreview: function(obj) {
      return `{{< instagram ${obj.pid} ${
        obj.hidecaption ? "hidecaption " : ""
      }>}}`;
  },
});
CMS.registerEditorComponent({
  id: "twitter",
  label: "Twitter",
  fields: [{
      name: "tid",
      label: "Tweet id",
      widget: "string"
  }],
  pattern: /{{< tweet ([a-zA-Z0-9]+) >}}/,
  fromBlock: function(match) {
      return {
          tid: match[1]
      };
  },
  toBlock: function(obj) {
      return `{{< tweet ${obj.tid} >}}`;
  },
  toPreview: function(obj) {
      return `{{< tweet ${obj.tid} >}}`;
  },
});
CMS.registerEditorComponent({
  id: "vimeo",
  label: "Vimeo",
  fields: [{
      name: "shortcode",
      label: "Vimeo shortcode",
      widget: "string"
  }],
  pattern: /{{< vimeo ([a-zA-Z0-9]+) >}}/,
  fromBlock: function(match) {
      return {
          shortcode: match[1]
      };
  },
  toBlock: function(obj) {
      return `{{< vimeo ${obj.shortcode} >}}`;
  },
  toPreview: function(obj) {
      return `{{< vimeo ${obj.shortcode} >}}`;
  },
});
CMS.registerEditorComponent({
  id: "youtube",
  label: "Youtube",
  fields: [{
      name: "id",
      label: "Youtube Video ID",
      widget: "string"
  }],
  pattern: /{{< youtube\s+(?<id>[A-Za-z0-9\-]+)\s+>}}/,
  fromBlock: function(match) {
      return {
          id: match[1],
      };
  },
  toBlock: function(obj) {
      return `{{< youtube ${obj.id} >}}`;
  },
  toPreview: function(obj) {
      return `<img src="https://i3.ytimg.com/vi/${obj.id}/hqdefault.jpg" alt="Youtube Video"/>`;
  },
});