export async function GET() {
  console.log("test")
  try {

    const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
    if (!WAKATIME_API_KEY) {
      return new Response(JSON.stringify({ error: 'Wakatime API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const authHeader = Buffer.from(`${WAKATIME_API_KEY}:`).toString('base64');

    const response = await fetch(
      `https://wakatime.com/api/v1/users/current/stats/last_7_days`,
      {
        headers: {
          Authorization: `Basic ${authHeader}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Wakatime API responded with status: ${response.status}`);
    }

    const data = await response.json();

    const processedData = {
      total_time_human_readable:
        data.data.human_readable_total_including_other_language,
      total_time_seconds: data.data.projects.reduce(
        (total: number, project: any) => total + project.total_seconds,
        0
      ),
    };

    return new Response(JSON.stringify(processedData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('Error fetching Wakatime stats:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
