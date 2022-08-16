(function (window, undefined) {
	window.Asc.plugin.init = () => {}

	window.Asc.plugin.onExternalPluginMessage = (data) => {
		switch (data.type) {
			case "insertInference":
				{
					// Export inference to plugin context
					Asc.scope.inference = data.inference;
					Asc.plugin.callCommand(() => {
						var oDocument = Api.GetDocument();
						var oParagraph = Api.CreateParagraph();
						oParagraph.AddText(Asc.scope.inference.transcript);
						oDocument.InsertContent([oParagraph]);
					}, false);
					break;
				}
		}
	};
})(window, undefined);