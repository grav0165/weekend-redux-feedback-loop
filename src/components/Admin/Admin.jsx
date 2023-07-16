

const Admin = ({surveyList}) => {

    return(
        <div className="admin">
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {surveyList.map(survey =>
                        <tr key={survey.id}>
                            <td>{survey.feeling}</td>
                            <td>{survey.understanding}</td>
                            <td>{survey.support}</td>
                            <td>{survey.comments}</td>
                            <td><button>Delete</button></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;