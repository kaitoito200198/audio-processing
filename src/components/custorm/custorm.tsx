import classNames from 'classnames';
import styles from './custorm.module.scss';
import { PageNoNavigation } from '../../_codux/board-wrappers/page-no-navigation';

export interface CustormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Custorm = ({ className }: CustormProps) => {
    return <PageNoNavigation />;
};
