using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EPiServer.Core;
using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace ImagePointEditor
{
    [EditorDescriptorRegistration(TargetType = typeof(string), UIHint = ImagePoint.UIHint)]
    public class ImagePoint : EditorDescriptor
    {
        public const string UIHint = "ImagePoint";

        public ImagePoint()
        {
            ClientEditingClass = "imagepointeditor/imagepointproperty";
        }
    }
}