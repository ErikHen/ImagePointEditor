
define([
    "dojo/_base/declare",
    "dijit/_Widget",
    "dijit/_TemplatedMixin",
    "epi/shell/_ContextMixin",

    "dojo/text!./ImagePointProperty.html",
    "dojo/dom",
    "dojo/domReady!",
    "xstyle/css!./styles.css"
],
    function (
        declare,
        _Widget,
        _TemplatedMixin,
        _ContextMixin,
        template,
        dom
    ) {
        return declare("imagepointeditor/imagepointproperty", [
            _Widget,
            _TemplatedMixin, _ContextMixin], {
                templateString: template,

                _setValueAttr: function (val) {
                    this.previewImage.src = this._currentContext.previewUrl;
                    this.value = val;
                    this._set('value', this.value);
                    this._showInfo();
                    
                },
                isValid: function () {
                    return true;
                },

                _previewImageLoaded: function () {
                    if (this.value) {
                        const values = this.value.split('|');
                        const percentageX = values[0];
                        const percentageY = values[1];
                        const pixelPosition = this._percentageToPixel(percentageX, percentageY, this.previewImage.getBoundingClientRect());
                        this._placePoint(pixelPosition.pixelX, pixelPosition.pixelY);
                    }
                },

                _setNewPosition: function (e) {
                    const newPosition = this._getPosition(e);
                    this._placePoint(newPosition.pixelX, newPosition.pixelY);

                    this.value = newPosition.percentageX + "|" + newPosition.percentageY;
                    this._set("value", this.value);
                    this.onChange(this.value);
                    this._showInfo();
                },

                _getPosition: function (e) {
                    const rect = e.target.getBoundingClientRect();
                    const pixelX = e.clientX - rect.left;
                    const pixelY = e.clientY - rect.top;
                    const percentageX = Math.round(pixelX / (rect.right - rect.left) * 100) / 100;
                    const percentageY = Math.round(pixelY / (rect.bottom - rect.top) * 100) / 100;

                    return { pixelX, pixelY, percentageX, percentageY };
                },

                _placePoint(x, y) {
                    //console.log("Place point: " + x + " " + y);
                    this.dotImage.style.left = Math.round(x) - 7 + "px";
                    this.dotImage.style.top = Math.round(y) - 7 + "px";
                    this.dotImage.style.display = "block";
                },

                _percentageToPixel: function (percentageX, percentageY, boundingRect) {
                    const pixelX = (boundingRect.right - boundingRect.left) * percentageX;
                    const pixelY = (boundingRect.bottom - boundingRect.top) * percentageY;
                    // console.log("Percentage to pixel: " + pixelX + " " + pixelY);
                    return { pixelX, pixelY };
                },

                _showInfo: function () {
                    this.info.innerHTML = this.value;
                },

                 _resetPosition: function (e) {
                    this.dotImage.style.display = "none";
                    this.value = null;
                    this._set("value", null);
                    this.onChange(null);
                    this._showInfo();
                },
            }
        );
    });