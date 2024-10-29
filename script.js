let lastCommand = null;

function formatText(command, value) {
    document.execCommand(command, false, value);
    lastCommand = command;
}

function undo() {
    document.execCommand('undo');
}

function insertImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = "Inserted Image";
            document.getElementById('editor').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

function changeFontSize(size) {
    if (size) {
        document.execCommand('fontSize', false, size);
    }
}

function changeTextColor(color) {
    document.execCommand('foreColor', false, color);
}

function changeFont(fontName) {
    if (fontName) {
        document.execCommand('fontName', false, fontName);
    }
}
