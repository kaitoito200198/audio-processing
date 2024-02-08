import { createBoard } from '@wixc3/react-board';
import { PageNoNavigation } from '../../board-wrappers/page-no-navigation';
import { HomePage } from '../../../components/home-page/home-page';

export default createBoard({
    name: 'Page-Home-Mobile',
    Board: () => (
        <PageNoNavigation>
            <HomePage />
        </PageNoNavigation>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        windowWidth: 414,
        windowHeight: 896,
    },
});
