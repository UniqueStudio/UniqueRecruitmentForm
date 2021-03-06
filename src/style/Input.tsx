import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import combineStyles from '../utils/combindStyles';
import borderStyles from './Border';
import fontStyles from './Font';
import heightStyles from './Height';
import CustomTheme from './theme';

const {
    palette: { primary }
} = CustomTheme;

interface Props {
    size: number;
    labelSize: number;
}

const style = ({ breakpoints }: Theme) =>
    createStyles({
        container: {
            width: 'fit-content',
            display: 'flex',
            '& > div': {
                height: '100%'
            }
        },
        item: {
            height: '100%'
        },
        labelContainer: ({ labelSize }: Props) => ({
            width: `${labelSize}vw`
        }),
        inputContainer: ({ size }: Props) => ({
            width: `${size}vw`
        }),
        label: {
            width: '100%',
            height: '100%',
            borderTopRightRadius: '0 !important',
            borderBottomRightRadius: '0 !important',
            borderWidth: '0 !important',
            backgroundColor: primary.main,
            userSelect: 'none'
        },
        labelText: {
            color: 'white',
            fontWeight: 700,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        input: {
            width: '100%',
            height: '100%',
            borderTopLeftRadius: '0 !important',
            borderBottomLeftRadius: '0 !important',
            borderLeftWidth: '0 !important',
            overflow: 'hidden',
            '& input': {
                padding: '0 10px',
                height: '100%',
                [breakpoints.down('md')]: {
                    padding: '0 8px'
                },
                [breakpoints.down('sm')]: {
                    padding: '0 6px'
                }
            }
        },
        inputText: {}
    });

const styles = combineStyles(style, borderStyles, fontStyles, heightStyles);

export default makeStyles(styles);
