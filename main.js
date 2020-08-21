$ui.render({
  views: [
    {
      type: "web",
      props: {
        url: "https://www.deepl.com/translator#en/zh/" + encodeURIComponent($context.text)
      },
      layout: $layout.fill
    }
  ]
});