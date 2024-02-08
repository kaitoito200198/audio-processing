import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Custorm',
    Board: () => (
        <div>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 374,
        canvasMargin: {
            left: 100,
            top: 100,
        },
    },
});
