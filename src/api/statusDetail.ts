import axios from 'axios';
import { HitDatabaseMap, WorkerDateFormat } from '../types';
import { API_URL } from '../constants';
import { parseStatusDetailPage } from '../utils/parsingStatusDetail';
import { StatusDetailApiResponse } from '../worker-mturk-api';
import { workerDateFormatToLegacyDateFormat } from '../utils/dates';

export interface StatusDetailPageInfo {
  readonly data: HitDatabaseMap;
  readonly morePages: boolean;
}

export const fetchStatusDetailPage = async (
  encodedDate: WorkerDateFormat,
  page = 1
) => {
  try {
    const response = await axios.get<StatusDetailApiResponse>(
      `${API_URL}/status_details/${encodedDate}`,
      {
        params: {
          format: 'json',
          page_number: page
        },
        responseType: 'json'
      }
    );

    return parseStatusDetailPage(
      response.data,
      workerDateFormatToLegacyDateFormat(encodedDate)
    );
  } catch (e) {
    throw Error('Problem fetching status detail: ' + e);
  }
};
