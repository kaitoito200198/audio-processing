import { createBoard } from '@wixc3/react-board';
import { PageNoNavigation } from '../../board-wrappers/page-no-navigation';
import { About } from '../../../components/about/about';

export default createBoard({
    name: 'Page-About',
    Board: () => (
        <PageNoNavigation>
            <About />
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
    },
});
