function Rainbow(colors) {
    this.interval = 1000;
    this.colors = colors;
    this.opacityLevel = '0.3';
    this.timer;

    // change the color using html id and update with time
    this.startOn = function(htmlId, newTime) {
        this.resetOpacity(htmlId);
        var selectedColors = this.colors;
        let index = 0;

        this.timer = setInterval(function() {
            document.getElementById(htmlId).style.backgroundColor = selectedColors[index];
            index++;
            // reset  color palet
            if (index > selectedColors.length) {
                index = 0;
            }
        }, newTime);

        //Display Colors and interval
        this.displayText(htmlId, this.colors, newTime);
    }

    // Display interval in rainbow
    this.displayInterval = function(parentId, interval) {
        document.querySelector(`#${parentId} .displayInterval`).innerHTML = interval;
    }

    // Display colors names in rainbow
    this.displayColors = function(parentHtmlId, colors) {
        const colorsName = colors.join(' , ');
        document.querySelector(`#${parentHtmlId} .colorsNames`).innerHTML = colorsName;
    }

    // call to colors and interval display method
    this.displayText = function(htmlId, colors, interval) {
        this.displayColors(htmlId, colors, interval);
        this.displayInterval(htmlId, interval);
    }

    // Stop the rainbow change
    this.resetTimer = function() {
        clearInterval(this.timer);
    }

    // change the color using html id and update with time
    this.stopOn = function(htmlId, newTime) {
        this.resetTimer();
        this.makeTranfer(htmlId);
    }

    this.resetOpacity = function(htmlId) {
        document.getElementById(htmlId).style.opacity = 1;
    }

    // html element set to tranfer
    this.makeTranfer = function(htmlId) {
        document.getElementById(htmlId).style.opacity = this.opacityLevel;
    }

    //updated the color with new color collection
    this.update = function(htmlId, newColors) {
        this.colors = newColors;
        // restart the rainbow
        this.restart(htmlId);
    }

    // Restart rainbow
    this.restart = function(htmlId) {
        this.resetTimer();
        this.startOn(htmlId, this.interval);
    }
}