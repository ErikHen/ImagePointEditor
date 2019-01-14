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
![](https://raw.githubusercontent.com/ErikHen/ImagePointEditor/master/doc/ImagePoint.gif)

The x and y values of the point is saved as a string, in the format &lt;x value&gt;|&lt;y value&gt;. The x and y values range from 0-1. 
<br/>
Ex:<br/>
0|0 = left top corner<br/>
1|1 = right bottom corner <br/>
0.5|0.5 = center of image<br/>
0.5|0 = center top  <br/>

## How to install
Easiest is to add nuget from the [EPiServer Nuget Feed](http://nuget.episerver.com/):

`Install-Package ImagePointEditor`

But if you don't want your solution to be dependent on some random guy's nuget package 🙂, 
it's' fairly easy to add all the parts manually.

### Changes made to your solution
When the nuget is added the following changes are made to you solution
* Add reference to ImagePointEditor.dll, which only contains the EditorDescriptor/UIHint.
* Add the Dojo module in the `modules\_protected` folder
* Add module in Web.config:
````XML
<episerver.shell>
    <protectedModules>
        <add name="ImagePointEditor" />
    </protectedModules>
</episerver.shell>
````
