document.addEventListener("DOMContentLoaded", () => {
	const addSpacesBtn = document.getElementById("addSpacesBtn");
	const updateVezhaBtn = document.getElementById("updateVezhaBtn");
	const inputTextarea = document.getElementById("inputTextarea");
	const outputTextarea = document.getElementById("outputTextarea");
	const copyOutputBtn = document.getElementById("copyOutputBtn");
	const resultField = document.getElementById("result");
	const addrsField = document.querySelector(".input_copy .txt");

	inputTextarea.addEventListener("input", () => {
		outputTextarea.classList.remove("pixel-bg");
		outputTextarea.value = "";
		resultField.innerHTML = "";
	});

	copyOutputBtn.addEventListener("click", () => {
		console.log("copy");
		outputTextarea.select();

		navigator.clipboard
			.writeText(outputTextarea.value)
			.then(() => {
				addrsField.classList.add("flashBG");
				setTimeout(() => {
					addrsField.classList.remove("flashBG");
				}, 1000);
			})
			.catch((error) => {
				console.error("Failed to copy text to clipboard:", error);
			});
	});

	addSpacesBtn.addEventListener("click", () => {
		try {
			console.log("add spaces", inputTextarea.value);
			const inputText = inputTextarea.value;
			const outputText = inputText.replace(/(<img .*?>)/g, "$1&nbsp;");
			outputTextarea.classList.add("pixel-bg");
			setTimeout(() => {
				outputTextarea.value = outputText;
				resultField.innerHTML = outputText;
			}, 500);
		} catch (err) {
			console.log(err.message);
		}
	});

	updateVezhaBtn.addEventListener("click", () => {
		resultField.innerHTML = "";
		try {
			const inputText = inputTextarea.value;

			const outputText = inputText
				.replace(/vezha\.vn\.ua/g, "vezha.ua")
				.replace(/<img .*?width=["']\d+["'].*?>/g, (match) =>
					match.replace(/width=["']\d+["'] */g, "")
				)
				.replace(/<img .*?height=["']\d+["'].*?>/g, (match) =>
					match.replace(/height=["']\d+["'] */g, "")
				);
			outputTextarea.classList.add("pixel-bg");
			setTimeout(() => {
				outputTextarea.value = outputText;
				resultField.innerHTML = outputText;
			}, 500);
		} catch (err) {
			console.log(err.message);
		}
	});
});
