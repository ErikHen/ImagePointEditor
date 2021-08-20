using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace ImagePointEditor.Core
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