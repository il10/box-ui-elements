// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { TASK_COMPLETION_RULE_ANY } from '../../../../constants';
import messages from './messages';
import Tooltip from '../../../../components/tooltip';
// $FlowFixMe
import LabelPill from '../../../../components/label-pill';

import IconAnyTask from '../../../../icons/general/IconAnyTask';
import type { TaskCompletionRule } from '../../../../common/types/tasks';

import './TaskCompletionRuleIcon.scss';

type Props = {|
    completionRule: ?TaskCompletionRule,
|};

const TaskCompletionRuleIcon = ({ completionRule }: Props): React.Node =>
    completionRule === TASK_COMPLETION_RULE_ANY && (
        <LabelPill.Pill>
            <Tooltip position="top-center" text={<FormattedMessage {...messages.taskAnyAffordanceTooltip} />}>
                <span>
                    <IconAnyTask height={11} width={11} className="bcs-TaskCompletionRuleIcon" />{' '}
                </span>
            </Tooltip>
        </LabelPill.Pill>
    );

export default TaskCompletionRuleIcon;
