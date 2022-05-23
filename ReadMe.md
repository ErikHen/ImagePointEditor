# Optimizely/Episerver CMS image point property editor
This editor makes it possible to select a point on an image by clicking on the image.<br/> 
Main purpose is to be able to set a focal point for an image, and use that focal point when the image is resized.
<br/>
The ImagePointEditor can be used together with the 
[Picture helper](https://hacksbyme.net/2019/01/17/control-the-cropping-of-your-images-with-a-focal-point/) for CMS 11, 
and [PictureRenderer](https://github.com/ErikHen/PictureRenderer.Optimizely) for CMS12, to 
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

Add [ImagePointEditor](https://nuget.optimizely.com/package/?id=ImagePointEditor) nuget from the  Optimizely Nuget Feed.

#### Configuration
For CMS 12 you need to add the following code to `ConfigureServices` in your `Startup.cs` file.

````C#
public void ConfigureServices(IServiceCollection services)
{
    services.AddImagePointEditor();
    ...
}
````
<br/><br/>

## Version history
#### 2.1.0
- More robust way to copy the module.
- Targeting both .Net5 & .Net6.
 Thanks [David](https://github.com/ddprince-yaksa)

#### 2.0.2
- Optimize nuget size (Thanks [@zunkas](https://github.com/zunkas)).
- More fail-safe icon references.

#### 2.0.1
- Fix issue with how nuget was created.

#### 2.0.0
- New version for Optimizely CMS 12

#### 1.0.1
- Fixed edge-case "path issue" (issue [#5](https://github.com/ErikHen/ImagePointEditor/issues/5)).

#### 1.0.0
- Initial version.
