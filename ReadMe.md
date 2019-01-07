# Episerver image point property editor
This editor makes it possible to select a point on an image by clicking on the image.<br/> 
Main purpose is to be able to set a focal point for an image, and use that focal point when the image is resized.
<br/>
The ImagePointEditor can be used together with the 
[Picture helper in ImageProcessor.Web.Episerver](https://github.com/vnbaaij/ImageProcessor.Web.Episerver#picture-helper) to 
automatically use a focal point when image is resized.

## How to use
Add a string property to your ImageData model. Decorate the property with the ImagePoint UI hint.
````C#
[UIHint(ImagePoint.UIHint)]
[Display(Name = "Focal point")]
public virtual string ImageFocalPoint { get; set; }
````
<br/>

Now it's possible to place a point when editing an image in "All properties view":<br/>
![Image poit gif](.\doc\ImagePoint.gif)

The x and y values of the point is saved as a pipe (|) separated string, in the format &lt;x value&gt;|&lt;y value&gt;. The x and y values range from 0-1. 
<br/>
Ex:<br/>
0|0 = left top corner<br/>
1|1 = right bottom corner <br/>
0.5|0.5 = center of image<br/>
0.5|0 = center top  <br/>
