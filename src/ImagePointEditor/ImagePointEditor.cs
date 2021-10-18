using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace ImagePointEditor
{
    [EditorDescriptorRegistration(TargetType = typeof(string), UIHint = ImagePoint.UIHint)]
    public partial class ImagePoint : EditorDescriptor
    {
        public ImagePoint()
        {
            ClientEditingClass = "imagepointeditor/imagepointproperty";
        }
    }

    public partial class ImagePoint : EditorDescriptor
    {
        public const string UIHint = "ImagePoint";
    }
}