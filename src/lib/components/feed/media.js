export function ShowMedia(lists, screenWidth) {
    let example = [];

    if (
        lists?.media?.files?.blob &&
        Array.isArray(lists.media.files.blob)
    ) {
        let media = lists.media.files.blob;
        let count = media.length;

        if (count === 1) {
            // One image
            example.push(`<div class="img-alone"><img style="width:100%;object-fit: cover;" src="http://files.bareey.com/${media[0]}" /></div>`);
        } else if (count === 2) {
            // Two images side-by-side
            example.push(`<div style="display:flex;" class="img-together">
                <img style="width:50%;object-fit: cover;" src="http://files.bareey.com/${media[0]}" />
                <img style="width:50%;object-fit: cover;" src="http://files.bareey.com/${media[1]}" />
            </div>`);
        } else if (count === 3) {
            // One big top image, two below
            example.push(`<div class="image-big"><img src="http://files.bareey.com/${media[0]}" /></div>`);
            example.push(`<div class="image-big-together">
                <img src="http://files.bareey.com/${media[1]}" />
                <img src="http://files.bareey.com/${media[2]}" />
            </div>`);
        } else if (count === 4) {
            // Two top, two bottom
            example.push(`<div style="display:flex;" class="image-sizing">
                <img style="width:50%;object-fit: cover;" src="http://files.bareey.com/${media[0]}" />
                <img style="width:50%;object-fit: cover;"  src="http://files.bareey.com/${media[1]}" />
            </div>`);
            example.push(`<div style="display:flex;" class="image-sizing">
                <img style="width:50%;object-fit: cover;" src="http://files.bareey.com/${media[2]}" />
                <img style="width:50%;object-fit: cover;" src="http://files.bareey.com/${media[3]}" />
            </div>`);
        } else if (count > 4) {
            // First 4 as grid, overlay "+N" on the last one
            let shown = media.slice(0, 4);
            example.push(`<div class="image-sizing">
                <img src="http://files.bareey.com/${shown[0]}" />
                <img src="http://files.bareey.com/${shown[1]}" />
            </div>`);
            example.push(`<div class="image-sizing">`);
            example.push(`<img src="http://files.bareey.com/${shown[2]}" />`);

            // Fourth image with overlay
            let remaining = count - 4;
            example.push(`<div class="extra-image-container">
                <img src="http://files.bareey.com/${shown[3]}" />
                <div class="extra-overlay">+${remaining}</div>
            </div>`);
            example.push(`</div>`);
        }
    }

    return example.length > 0 ? `<div style="margin-top:10px;" class="image-gallery"> ${example.join("")}</div>` : "";
}